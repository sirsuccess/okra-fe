import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
  //   Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import TestOne from "../pages/TestOne";
import TestTwo from "../pages/TestTwo";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/test-1">
          <TestOne />
        </Route>
        <Route exact path="/dashboard">
          <TestTwo />
        </Route>
        <Route exact path="/analytics">
          <TestTwo />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
