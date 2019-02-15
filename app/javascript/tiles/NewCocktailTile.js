import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class NewCocktailTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image_url:"",
      directions:"",
      error:""
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
          throw(response)
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({redirect: true, cocktail_id: body.cocktail.id})
      })
      .catch(error => {
        this.setState({error: error.statusText})
      });

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
    let errorMessage =()=>{
      if (this.state.error !== "Unauthorized") { 
        return <input className="button" type="submit" value="Submit" />
       } else{
         return(
            <a href="/users/sign_in">
              <div className="button">Please Log In</div>
            </a>
         )
       }
    }
    return (
      <div className="form">
        <div className="grid-x align-center grid-margin-y">
          <div className="cell medium-8 background-opaque">
            <div className="grid-x align-center grid-margin-y devise-forms background-opaque">
              <div className="cell">
                <form onSubmit={handleNewCocktail}>
                  <label>
                    Cocktail:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                  </label>
                  <label>
                    Image URL:
                    <input name="image_url" type="text" value={this.state.image_url} onChange={this.handleChange} />
                  </label>
                  <label>
                    Directions:
                    <textarea name="directions" type="text" value={this.state.directions} onChange={this.handleChange} />
                  </label>
                  <div className="text-center">
                    {errorMessage()}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewCocktailTile;
