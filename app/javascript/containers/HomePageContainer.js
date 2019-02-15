import React, { Component } from "react";

import SearchTile from '../tiles/SearchTile'
import CocktailsContainer from './CocktailsContainer'
import NewCocktailTile from '../tiles/NewCocktailTile'


class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchCenter:"100vh"
    };
    this.searchTextChange=this.searchTextChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.fetchQueriedData = this.fetchQueriedData.bind(this)
  }


  searchTextChange(searchText){
    this.setState({searchText: searchText})
  }

  handleSearch(){
    if (this.state.searchText.replace(/\s/g, '') != ""){
      this.fetchQueriedData()
    }
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
        if(body.cocktails.length > 0){
          this.setState({ results: body, searchCenter: "100%" })
        } else{
          this.setState({ results: body, searchCenter: "100vh"})
        }
          
      })
  }
  render() {
    let results =() =>{
      if(this.state.results && this.state.results.cocktails.length > 0){
        return(
            <div className="cell"><CocktailsContainer cocktails={this.state.results.cocktails} /></div>
        );
      }
    }
    let searchStyle = {height: this.state.searchCenter}
    return(
      <div className="grid-container grid-margin-y fluid">
        <div className="cell"></div>
        <div className="grid-x grid-padding-y align-center">
          <div className="cell small-12 large-4 transition" style={searchStyle}>
            <SearchTile searchText={this.state.searchText} onChange={this.searchTextChange} handleSearch={this.handleSearch} />
          </div>
        </div>
        {results()}  
      </div>
    )
  }
}

export default HomePageContainer;

// <div style={{ margin: '2rem' }}>
//   <NewCocktailTile handleSubmit={this.newCocktailSubmit} />
// </div>