import React from "react";
import { Link } from 'react-router'


const CocktailTile = props => {
  return (
    <div className="cell small-6">
      <Link to={`/cocktail/${props.cocktail.id}`}>
        <div className="image"><img src={props.cocktail.image_url}></img></div>
      </Link>
    </div>
  );
};

export default CocktailTile;
