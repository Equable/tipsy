import React, { Component } from "react";

import NewLiquorPartTile from '../tiles/NewLiquorPartTile'
import NewOtherIngredientsTile from '../tiles/NewOtherIngredientsTile'

class CocktailShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image:"",
      directions:"",
      liquorParts:[],
      otherIngredients: []
    };
    this.fetchCocktail = this.fetchCocktail.bind(this)
    this.addLiquorPart = this.addLiquorPart.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
  }

  fetchCocktail(){
    let id = this.props.match.params.id
    fetch(`/api/v1/cocktail/${id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({name: body.name, image: body.image_url, directions: body.directions || "", liquorParts: body.liquor_parts, otherIngredients: body.other_ingredients})
      })
  }

  addLiquorPart(liquor) {
    let id = this.props.match.params.id
    let parts = this.state.liquorParts
    liquor.cocktail_id = id
    fetch(`/api/v1/liquor_part`, {
      method: 'POST',
      body: JSON.stringify({ liquor_part: liquor }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        parts = parts.concat(body)
        this.setState({ liquorParts: parts})
      })
  }

  addIngredient(ingredient) {
    let id = this.props.match.params.id
    let ingredients = this.state.otherIngredients
    ingredient.cocktail_id= id
    fetch(`/api/v1/other_ingredient`, {
      method: 'POST',
      body: JSON.stringify({ ingredient: ingredient }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        ingredients = ingredients.concat(body)
        this.setState({ otherIngredients: ingredients })
      })
  }


  componentDidMount(){
    this.fetchCocktail()
  }
  render() {
    let liquorParts = this.state.liquorParts.map((liquorPart)=>{
      return <li>{liquorPart.amount} {liquorPart.unit} {liquorPart.name} <span></span></li>
    })

    let otherIngredients = this.state.otherIngredients.map((ingredient) => {
      return <li>{ingredient.amount} {ingredient.unit} {ingredient.name} </li>
    })
    return(
      <div className="grid-x align-center grid-margin-y">
        <div className="cell" style={{color: 'white', textAlign: 'center'}}>
          <h1>{this.state.name}</h1>
        </div>
        <div className="cell small-4 medium-3">
          <img src={this.state.image}></img>
        </div>
        <div className="cell small-8 medium-7" style={{background: 'white'}}>
          <ul style={{listStyleType:'none'}}>
            {liquorParts}
            {otherIngredients}
          </ul>
          <p>{this.state.directions}</p>
        </div>
        <NewLiquorPartTile addLiquorPart={this.addLiquorPart}/>
        <NewOtherIngredientsTile addIngredient={this.addIngredient}/>
      </div>
    )
  }
}

export default CocktailShowContainer;
