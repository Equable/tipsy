import React from "react";
import { Route, Router, Link, Switch } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory'


import HomePageContainer from "../../containers/HomePageContainer"
import CocktailShowContainer from "../../containers/CocktailShowContainer";
import NewSpiritSubtypeTile from "../../tiles/NewSpiritSubtypeTile";
import NewLiquorTile from "../../tiles/NewLiquorTile";
import NewLiquorPartTile from "../../tiles/NewLiquorPartTile";
import NewCocktailTile from "../../tiles/NewCocktailTile";

const history = createBrowserHistory()

const App = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/cocktail/new' component={NewCocktailTile} />
        <Route path='/cocktail/:id' component={CocktailShowContainer} />
        <Route path='/subtype/new' component={NewSpiritSubtypeTile} />
        <Route path='/liquor/new' component={NewLiquorTile} />
        <Route path='/cocktail/:cocktail_id/liquor_parts' component={NewLiquorPartTile} />
        <Route exact path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  );
};

export default App;

