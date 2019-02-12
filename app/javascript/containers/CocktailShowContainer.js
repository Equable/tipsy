import React, { Component } from "react";
import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NewLiquorPartTile from '../tiles/NewLiquorPartTile'
import NewOtherIngredientsTile from '../tiles/NewOtherIngredientsTile'
import ReviewsContainer from './ReviewsContainer' 

class CocktailShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image:"",
      directions:"",
      loggedIn:false,
      signedIn:{},
      liquorParts:[],
      otherIngredients: []
    };
    this.fetchCocktail = this.fetchCocktail.bind(this)
    this.addLiquorPart = this.addLiquorPart.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.deleteLiquor = this.deleteLiquor.bind(this)
  }

  deleteLiquor(id){
    fetch(`/api/v1/liquor_part/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id: id}),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          this.fetchCocktail()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
  }

  deleteIngredient(id){
    fetch(`/api/v1/other_ingredient/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          this.fetchCocktail()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
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
        this.setState({signedIn: body.signed_in, loggedIn: body.logged_in, name: body.name, image: body.image_url, directions: body.directions || "", liquorParts: body.liquor_parts, otherIngredients: body.other_ingredients, locations: body.locations})
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
      let deleteLiquor=()=>{
        this.deleteLiquor(liquorPart.id)
      }
      if(this.state.loggedIn){
        return <li key={`Liq_${liquorPart.id}`}>{liquorPart.amount} {liquorPart.unit} {liquorPart.name} <span style={{ float: 'right' }}><FontAwesomeIcon key={`LiqD_${liquorPart.id}`} className="delete-icon" onClick={deleteLiquor} icon={faEraser}/></span></li>
      }else{
        return <li key={`Liq_${liquorPart.id}`}>{liquorPart.amount} {liquorPart.unit} {liquorPart.name}</li>
      }
    })

    let otherIngredients = this.state.otherIngredients.map((ingredient) => {
      let deleteIngredient = () => {
        this.deleteIngredient(ingredient.id)
      }
      if (this.state.loggedIn) {
        return <li key={`Ing_${ingredient.id}`}>{ingredient.amount} {ingredient.unit} {ingredient.name} <span style={{ float: 'right' }}><FontAwesomeIcon key={`IngD_${ingredient.id}`} className="delete-icon" icon={faEraser} onClick={deleteIngredient} /></span></li>
      } else {
        return <li key={`Ing_${ingredient.id}`}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
      }
    })
    let addParts = () =>{
      if (this.state.loggedIn) {
        return(
          <div>
            <NewLiquorPartTile addLiquorPart={this.addLiquorPart} />
            <NewOtherIngredientsTile addIngredient={this.addIngredient} />
          </div>
        )
      }
    }
    return(
      <div key="show_container">
        <div className="grid-x align-center grid-margin-y" style={{margin:'2rem'}}>
          <div className="cell small-12 medium-8 cocktail-show-tile">
            <div className="grid-x cocktail-show-tile grid-margin-y">
              <div className="cell text-center">
                <h1>{this.state.name}</h1>
              </div>
              <div className="cell medium-4">
                <img src={this.state.image}></img>
              </div>
              <div className="cell medium-8">
                <ul style={{ listStyleType: 'none' }}>
                  {liquorParts}
                  {otherIngredients}
                </ul>
                <p>{this.state.directions}</p>
              </div>
            </div>
          </div>
        </div>
        {addParts()}
        <ReviewsContainer cocktailId={this.props.match.params.id} signedIn={this.state.signedIn}/>
      </div>
      
    )
  }
}

export default CocktailShowContainer;
