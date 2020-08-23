import React from "react";

import { Link } from "react-router-dom";
import winter from "../../../assets/winter.webp";
import "./Project.css";

const Weather_app = () => {
  return (
    <div className="container">
      <div className="project">
        <div className="project_bg">
          <div className="project_desc">
            <div className="project_content">
              <p className="project_para">
                It's a Weather forecast app. It provides accurate weather
                conditions with the climate description. Javascript, CSS, HTML
                languages are used to build this app in Reactjs.
              </p>

              <b style={{ color: "#1e2a78" }}>
                Click on the link below and get a glimpse of the application.
              </b>
              <div className="project_btn">
                <a
                  href="https://prabhjotweatherapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                  style={{ width: "80%" }}
                >
                  Weather App
                </a>
              </div>
            </div>
            <div className="project_nextbtn">
              <Link to="/project/quiz">
                <button
                  type="button"
                  className="button-three"
                  style={{ backgroundColor: "#FF1F5A", width: "7em" }}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="project_screenshot">
          <img
            className="screenshot_image"
            src={winter}
            alt=""
            style={{ height: "300px", width: "350px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Weather_app;
