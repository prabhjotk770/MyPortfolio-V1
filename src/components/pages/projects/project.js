import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Project1 from "./Project1";

const Project = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/project">
          <Project1 />
        </Route>
      </Switch>
    </Router>
  );
};
export default Project;
