import React from "react";
import Navbar from "./components/layout/navbar";

import Home from "./components/pages/home";
import Project from "./components/pages/projects/Project1";
import Contact from "./components/pages/contact";
import Footer from "./components/layout/footer";
import About from "./components/pages/About";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
