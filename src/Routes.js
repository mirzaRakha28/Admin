import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blank from "./pages/Blank"
import Dashboard from "./pages/Dashboard";
const Routes = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard"component={Blank}/>
        </Switch>
    </Router>
)
export default Routes;
