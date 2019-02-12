import React from "react";
import { Link } from 'react-router-dom'


const CocktailTile = props => {
  return (
    <div className="cell small-12 medium-3">
      <div className="grid-x cocktail">
        <Link to={`/cocktail/${props.cocktail.id}`}>
          <div className="cell small-1 text-center">
            <h4>{props.cocktail.name}</h4>
          </div>
          <div className="cell small-7 image">
            <img src={props.cocktail.image_url}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CocktailTile;
