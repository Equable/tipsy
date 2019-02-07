import React from "react";
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";
import HomePageContainer from "../../containers/HomePageContainer"

const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomePageContainer} />
    </Router>
  );
};

export default App;
