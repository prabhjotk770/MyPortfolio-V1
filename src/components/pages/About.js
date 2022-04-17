import React, { useState } from "react";
import { Fade } from "react-reveal";

import { MDBRow, MDBCol } from "mdbreact";

import "./About.css";
import AboutIcon from "./AboutIcon";
const About = () => {
  const [skills] = useState([
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      name: "React",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "Javascript",
    },
    {
      url: "https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png",
      name: "HTML5",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      name: "CSS",
    },
    {
      url: "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
      name: "Redux",
    },
    {
      url: "https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg",
      name: "NodeJS",
    },
    { url: "https://img.icons8.com/ios/452/sql.png", name: "SQL" },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
      name: "C++",
    },
  ]);

  const [tools] = useState([
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
      name: "VScode",
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      name: "Github",
    },
    { url: "https://img.icons8.com/color/452/npm.png", name: "NPM" },
    { url: "https://i.stack.imgur.com/dMXbE.png", name: "Bootstrap" },
    { url: "https://material-ui.com/static/logo.png", name: "Material UI" },
    {
      url: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
      name: "Firebase",
    },
    {
      url: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775",
      name: "MongoDB",
    },
    {
      url: "https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png",
      name: "Express",
    },
  ]);
  return (
    <div className="mb-md-5">
      <div className="ml-md-3 mr-md-3 row pb-0">
        <div className="col-md-6 col-sm-12 align-self-center">
          <Fade>
            <div className="d-flex flex-column align-items-center">
              <h2 className="mb-0 pb-0">ABOUT</h2>
              <hr
                style={{
                  backgroundColor: "#feadb9",
                  height: "4px",
                  width: "70px",
                }}
              />

              <p className="text-center pl-2 pr-2 ">
                I am a web application and mobile application developer from
                India. I design and code beautifully simple things, and I love
                new technologies. I have a passion for making creative and
                dynamic user interfaces. I prefer to keep learning and continue
                challenging myself.
              </p>
            </div>
          </Fade>
        </div>
        <div className="col-md-6 col-sm-12">
          <Fade>
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.nohat.cc/thumb/f/720/comvecteezy227854.jpg"
                class="card"
                alt="aboutimage"
                className="aboutimage"
              />
            </div>
          </Fade>
        </div>
      </div>

      <div className="d-flex  justify-content-around row ml-sm-1 mr-sm-1 ">
        <div className="col-md-5 col-sm-6 m-2 ">
          <Fade left>
            <div className="icon_box">
              <AboutIcon icon={skills} title="SKILLS" />
            </div>
          </Fade>
        </div>
        <div className="col-md-5 col-sm-6 m-2">
          <Fade right>
            <div className="icon_box">
              <AboutIcon icon={tools} title="TOOLS" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
