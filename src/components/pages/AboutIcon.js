import React from "react";
import { Fade } from "react-reveal";

import "./About.css";
const AboutIcon = (props) => {
  return (
    <div>
      <Fade left>
        <div className="p-4">
          <h3 className="text-center mb-3">{props.title}</h3>
          <div className="d-flex row">
            {props.icon.map((a, i) => (
              <div className="col-3 mb-2">
                <img
                  style={{}}
                  key={i}
                  src={a.url}
                  alt={a.name}
                  height="60"
                  width="70"
                  title={a.name}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutIcon;
