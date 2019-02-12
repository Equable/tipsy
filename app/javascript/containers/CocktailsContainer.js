import React, { Component } from "react";

import CocktailTile from '../tiles/CocktailTile'

class CocktailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }
  render() {
    let cocktails = this.props.cocktails.map((cocktail)=>{
      return(
        <CocktailTile
          key={`tail_${cocktail.id}`}
          cocktail={cocktail}
        />
      )
    })

    return (
      <div className="grid-x align-center grid-margin-x grid-margin-y cocktails">
        {cocktails}
      </div>
    )
  }
}

export default CocktailsContainer;
