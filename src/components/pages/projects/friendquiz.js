import React from "react";
import "./Project.css";

import friendship from "../../../assets/friendship.png";

import { Link } from "react-router-dom";

const Friendship = () => {
  return (
    <div className="container">
      <div className="project">
        <div className="project_bg">
          <div className="project_desc">
            <div className="project_content">
              <p className="project_para">
                It is a fun application you can use to know how well your
                friends know you. Javascript, CSS, HTML languages are used to
                build this app in Reactjs and Nodejs.
              </p>

              <b style={{ color: "#1e2a78" }}>
                Click on the link below and get a glimpse of the application.
              </b>
              <div className="project_btn">
                <a
                  href="https://friendshipquiz.netlify.app/quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                  style={{ width: "80%" }}
                >
                  Friendship Quiz
                </a>
              </div>
            </div>
            <div className="project_nextbtn">
              <Link to="/project/">
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
            src={friendship}
            alt=""
            style={{ height: "300px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Friendship;
