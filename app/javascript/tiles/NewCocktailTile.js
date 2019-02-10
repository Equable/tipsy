import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class NewCocktailTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image_url:"",
      directions:""
    };
    this.handleChange = this.handleChange.bind(this)
    this.newCocktailSubmit = this.newCocktailSubmit.bind(this)
    this.postNewCocktail = this.postNewCocktail.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  newCocktailSubmit(newCocktail) {
    this.postNewCocktail(newCocktail)
  }

  postNewCocktail(cocktail) {
    fetch(`/api/v1/cocktail`, {
      method: 'POST',
      body: JSON.stringify({ cocktail: cocktail }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({redirect: true, cocktail_id: body.cocktail.id})
      })

  }
  render(){
    let handleNewCocktail =(event)=>{
      event.preventDefault()
      let newCocktail = this.state
      this.newCocktailSubmit(newCocktail)
    }
    let redirect
    if(this.state.redirect){
      return <Redirect to={`/cocktail/${this.state.cocktail_id}`} />;
    }
    return (
      <div className="cell" style={{ background: 'white' }}>
        <form onSubmit={handleNewCocktail}>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Image URL:
            <input name="image_url" type="text" value={this.state.image_url} onChange={this.handleChange} />
          </label>
          <label>
            directions:
            <input name="directions" type="text" value={this.state.directions} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default NewCocktailTile;
