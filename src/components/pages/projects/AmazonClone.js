import React from "react";
import "./Project.css";

import amazon_sc1 from "../../../assets/amazon.png";

import { Link } from "react-router-dom";

function AmazonClone() {
  return (
    <div className="container">
      <div className="project">
        <div className="project_bg">
          <div className="project_desc">
            <div className="project_content">
              <p className="project_para">
                it's an Amazon clone web app. sign in, sign up features are also
                included. Javascript, CSS, HTML languages are used to build this
                app in Reactjs. Firebase is used for the login component.
              </p>

              <b style={{ color: "#1e2a78" }}>
                Click on the link below and get a glimpse of the application.
              </b>
              <div className="project_btn">
                <a
                  href="https://clone-d244d.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                  style={{ width: "80%" }}
                >
                  Amazon Clone
                </a>
              </div>
            </div>
            <div className="project_nextbtn">
              <Link to="/project/weather">
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
            src={amazon_sc1}
            alt=""
            style={{ height: "330px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default AmazonClone;
