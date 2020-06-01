import React from "react";
import Friendship from "./friendquiz";
import Clock from "./clock";
import Calc from "./calc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Project = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/project">
          <Clock />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/calc">
          <Calc />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/quiz">
          <Friendship />
        </Route>
      </Switch>
    </Router>
  );
};
export default Project;
