import React, { Component } from "react";
import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NewLiquorPartTile from '../tiles/NewLiquorPartTile'
import NewOtherIngredientsTile from '../tiles/NewOtherIngredientsTile'
import ReviewsContainer from './ReviewsContainer' 
import MapTile from '../tiles/MapTile'

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
      otherIngredients: [],
      showMap: false
    };
    this.fetchCocktail = this.fetchCocktail.bind(this)
    this.addLiquorPart = this.addLiquorPart.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.deleteLiquor = this.deleteLiquor.bind(this)
    this.toggleMap = this.toggleMap.bind(this)
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

  toggleMap(){
    if(this.state.showMap){
      this.setState({showMap: false})
    } else{
      this.setState({ showMap: true })
    }
  }

  componentDidMount(){
    this.fetchCocktail()
  }
  
  render() {
    let liquorParts = this.state.liquorParts.map((liquorPart)=>{
      let deleteLiquor=()=>{
        this.deleteLiquor(liquorPart.id)
      }
      name = liquorPart.name
      if(name === "Any"){name = ""}
      if(this.state.loggedIn){
        return <li key={`Liq_${liquorPart.id}`}>{liquorPart.amount} {liquorPart.unit} {name} {liquorPart.subtype} {liquorPart.spirit}<span style={{ float: 'right' }}><FontAwesomeIcon key={`LiqD_${liquorPart.id}`} className="delete-icon" onClick={deleteLiquor} icon={faEraser}/></span></li>
      }else{
        return <li key={`Liq_${liquorPart.id}`}>{liquorPart.amount} {liquorPart.unit} {name} {liquorPart.subtype} {liquorPart.spirit}</li>
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
    let showMap =()=>{
      if(this.state.showMap){
        return(
          <div className="cell">
            <div className="grid-x grid-margin-y">
              <div className="cell">
                <MapTile cocktailId={this.props.match.params.id}/>
              </div>
              <div className="cell map text-center">
                <input className="button" type="submit" value="Hide Map" onClick={this.toggleMap} />
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="cell map text-center">
            <input className="button" type="submit" value="Show Map" onClick={this.toggleMap} />
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
          {showMap()}
        </div>
        {addParts()}
        <ReviewsContainer cocktailId={this.props.match.params.id} signedIn={this.state.signedIn}/>
      </div>
      
    )
  }
}

export default CocktailShowContainer;
