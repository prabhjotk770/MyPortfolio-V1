import React from "react";
import ProjectDesc from "./ProjectDesc";
import "./Project1.css";
import netflix_img from "../../../assets/netflix_bg.png";
import amazon_img from "../../../assets/amazon_bg.png";
import weather_img from "../../../assets/weather_bg.png";
import friendship_img from "../../../assets/friendship_bg.png";
import Calendar_img from "../../../assets/calendar.png";
import shopping_img from "../../../assets/shopping.png";

function Project1() {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <div className="project_heading p-2">
        <h2>MY PROJECTS</h2>
        <hr
          style={{ backgroundColor: "#feadb9", height: "4px", width: "170px" }}
        />
      </div>

      <div className="d-flex flex-column">
        <div className=" project_row">
          <div className="project_box">
            <ProjectDesc
              image={shopping_img}
              language="ReactJs, Javascript, CSS, HTML, Redux, Firebase"
              desc="A simple shopping app with integrated features like, filter products, add to cart, authentication etc."
              title="Shopping App"
              siteLink="https://shopping-appp.netlify.app/"
            />
          </div>

          <div className="project_box">
            <ProjectDesc
              image={Calendar_img}
              language="ReactJs, Javascript, Node, Google Calendar API, CSS, HTML"
              desc="A simple web app to display your upcoming google calendar events"
              title="Calendar Events"
              siteLink="https://calendar-events-app.netlify.app/"
            />
          </div>

          <div className="project_box">
            <ProjectDesc
              image={netflix_img}
              language="ReactJs, Javascript, CSS, HTML"
              desc="It's a demo Netflix web app. Netflix's original web series
              trailer can be played as well."
              title="Netflix Clone"
              siteLink="https://prabhjotkaur-netflix-clone.netlify.app/"
            />
          </div>
        </div>
        <div className="project_row">
          <div className="project_box">
            <ProjectDesc
              image={weather_img}
              language="ReactJs, Javascript, CSS, HTML"
              desc="It provides accurate weather
              conditions of different places in the world."
              title="Weather Forecast App"
              siteLink="https://prabhjotweatherapp.netlify.app/"
            />
          </div>

          <div className="project_box">
            <ProjectDesc
              image={amazon_img}
              language="ReactJs, Javascript, Firebase, React Context API, CSS, HTML"
              desc="It's a demo Amazon web app. User authorization and add to cart features integrated."
              title="Amazon Clone"
              siteLink="https://prabhjotkaur-ecommerce-clone.netlify.app/"
            />
          </div>

          <div className="project_box">
            <ProjectDesc
              image={friendship_img}
              language="ReactJs, Javascript, MongoDB, NodeJs, CSS, HTML"
              desc="It's a fun application you can use to know how well your
              friends really know you."
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
