import React from "react";
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";
import HomePageContainer from "../../containers/HomePageContainer"
import CocktailShowContainer from "../../containers/CocktailShowContainer";
import NewSpiritSubtypeTile from "../../tiles/NewSpiritSubtypeTile";
import NewLiquorTile from "../../tiles/NewLiquorTile";
import NewLiquorPartTile from "../../tiles/NewLiquorPartTile";

const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomePageContainer} />
      <Route path='/cocktail/:id' component={CocktailShowContainer}/>
      <Route path='/subtype/new' component={NewSpiritSubtypeTile} />
      <Route path='/liquor/new' component={NewLiquorTile} />
      <Route path='/api/v1/cocktail/:cocktail_id/liquor_parts' component={NewLiquorPartTile} />
    </Router>
  );
};

export default App;
