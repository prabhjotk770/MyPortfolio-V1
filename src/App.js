import React from "react";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Project from "./components/pages/projects/project";
import Contact from "./components/pages/contact";
import Footer from "./components/layout/footer";
import About from "./components/pages/About";


const App = () => {
  
 
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer/>
    
    </Router>
  );
};

export default App;
