import React, { Component } from "react";

import CocktailTile from '../tiles/CocktailTile'
import Bounce from 'react-reveal'
import {TransitionGroup} from 'react-transition-group'

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
      <div className="grid-x align-center white-background">
        {cocktails}
      </div>
    )
  }
}

export default CocktailsContainer;
