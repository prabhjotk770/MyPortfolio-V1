import React from "react";
import ProjectDesc from "./ProjectDesc";
import "./Project1.css";
import netflix_img from "../../../assets/netflix_bg.png";
import amazon_img from "../../../assets/amazon_bg.png";
import weather_img from "../../../assets/weather_bg.png";
import friendship_img from "../../../assets/friendship_bg.png";

function Project1() {
  return (
    <div className="project1">
      <div className="project_heading">
        <h2>MY PROJECTS</h2>
      </div>
      <div className="project_column">
        <div className="project_row">
          <div className="project_box">
            <ProjectDesc
              image={netflix_img}
              language="ReactJs, Javascript, CSS, HTML"
              desc="It's a demo Netflix web app. Few amazon originals web series
              trailer can be played as well."
              title="Netflix Clone"
              siteLink="https://prabhjotkaur-netflix-clone.netlify.app/"
            />
          </div>
          <div className="project_box">
            <ProjectDesc
              image={amazon_img}
              language="ReactJs, Javascript, Firebase, React Context API, CSS, HTML"
              desc="It's a demo amazon web app. sign in, sign up features are also
              included."
              title="Amazon Clone"
              siteLink="https://clone-d244d.web.app/"
            />
          </div>
        </div>
        <div className="project_row">
          <div className="project_box">
            <ProjectDesc
              image={weather_img}
              language="ReactJs, Javascript, CSS, HTML"
              desc="It provides accurate weather
              conditions with the climate description."
              title="Weather Forecast App"
              siteLink="https://prabhjotweatherapp.netlify.app/"
            />
          </div>
          <div className="project_box">
            <ProjectDesc
              image={friendship_img}
              language="ReactJs, Javascript, MongoDB, NodeJs, CSS, HTML"
              desc="It's a fun application you can use to know how well your
              friends know you."
              title="Friendship Quiz"
              siteLink="https://friendshipquiz.netlify.app/quiz"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
