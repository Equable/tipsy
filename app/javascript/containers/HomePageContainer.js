import React, { Component } from "react";

import SearchTile from '../tiles/SearchTile'
import CocktailsContainer from './CocktailsContainer'
import NewCocktailTile from '../tiles/NewCocktailTile'

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.searchTextChange=this.searchTextChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.fetchQueriedData = this.fetchQueriedData.bind(this)
    this.newCocktailSubmit = this.newCocktailSubmit.bind(this)
    this.postNewCocktail = this.postNewCocktail.bind(this)
  }


  searchTextChange(searchText){
    this.setState({searchText: searchText})
  }

  handleSearch(){
    if (this.state.searchText.replace(/\s/g, '') != ""){
      this.fetchQueriedData()
    }
  }

  newCocktailSubmit(newCocktail){
    this.postNewCocktail(newCocktail)
  }

  postNewCocktail(cocktail){
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
        debugger
      })

  }

  fetchQueriedData(query){
    fetch(`/api/v1/search`, {
      method: 'POST',
      body: JSON.stringify({ query: this.state.searchText }),
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
        this.setState({results: body})
      })
  }

  render() {
    let results =() =>{
      if(this.state.results){
        return(
            <div className="cell"><CocktailsContainer cocktails={this.state.results.cocktails} /></div>
        );
      }
    }
    let style ={
      minHeight: '100vh',
      color: 'white'
    }
    return(
      <div className="grid-container fluid">
        <div className="grid-y align-center" style={style}>
          <div className="cell small-2">
            <div className="grid-x align-center" style={{height: '100%'}}>
              <div className="cell small-12 large-4">
                <SearchTile searchText={this.state.searchText} onChange={this.searchTextChange} handleSearch={this.handleSearch} />
              </div>
            </div>
          </div>
          {results()}                    
        </div>
        <div style={{ margin: '2rem' }}>
          <NewCocktailTile handleSubmit={this.newCocktailSubmit} />
        </div>
      </div>
    )
  }
}

export default HomePageContainer;
