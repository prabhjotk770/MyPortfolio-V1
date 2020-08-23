import React from "react";
import Friendship from "./friendquiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AmazonClone from "./AmazonClone";
import WeatherApp from "./WeatherApp";
import NetflixClone from "./NetflixClone";

const Project = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/project">
          <NetflixClone />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/amazon">
          <AmazonClone />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project/weather">
          <WeatherApp />
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
