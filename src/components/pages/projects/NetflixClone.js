import React from "react";
import "./Project.css";

import netflix_sc from "../../../assets/netflix.webp";

import { Link } from "react-router-dom";

function NetflixClone() {
  return (
    <div className="container">
      <div className="project">
        <div className="project_bg">
          <div className="project_desc">
            <div className="project_content">
              <p className="project_para">
                It's a Netflix Clone app. Few amazon originals web series
                trailer can be played as well. Javascript, CSS, HTML languages
                are used to build this app in Reactjs. Firebase is used for the
                login component.
              </p>

              <b style={{ color: "#1e2a78" }}>
                Click on the link below and get a glimpse of the application.
              </b>
              <div className="project_btn">
                <a
                  href="https://prabhjotkaur-netflix-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                  style={{ width: "80%" }}
                >
                  Netflix Clone
                </a>
              </div>
            </div>
            <div className="project_nextbtn">
              <Link to="/project/amazon">
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
            src={netflix_sc}
            alt=""
            style={{ height: "300px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NetflixClone;
