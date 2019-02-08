import React, { Component } from "react";

import SearchTile from '../tiles/SearchTile'
import CocktailsContainer from './CocktailsContainer'
import NewCocktailTile from '../tiles/NewCocktailTile'

class CocktailShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image:"",
      directions:""
    };
  }

  fetchCocktail(){
    let id = this.props.params.id
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
        this.setState({name: body.name, image: body.image_url, directions: body.directions || ""})
      })
  }


  componentDidMount(){
    this.fetchCocktail()
  }
  render() {

    return(
      <div className="grid-x align-center">
        <div className="cell" style={{color: 'white'}}>
          <h1>{this.state.name}</h1>
        </div>
        <div className="cell small-4 medium-3">
          <img src={this.state.image}></img>
        </div>
        <div className="cell small-8 medium-7" style={{background: 'white'}}>
          <p>{this.state.directions}</p>
        </div>
      </div>
    )
  }
}

export default CocktailShowContainer;
