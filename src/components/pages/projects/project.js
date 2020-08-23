import React from "react";
import Friendship from "./friendquiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amazon_clone from "./Amazon_clone";
import Weather_app from "./Weather_app";
import Netflix_Clone from "./Netflix_Clone";

const Project = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/project">
          <Netflix_Clone />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/amazon">
          <Amazon_clone />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/weather">
          <Weather_app />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/quiz">
          <Friendship />
        </Route>
      </Switch>
    </Router>
  );
};
export default Project;
