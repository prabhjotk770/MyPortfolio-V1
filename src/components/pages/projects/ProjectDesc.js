import React from "react";
import "./ProjectDesc.css";

function ProjectDesc(props) {
  return (
    <div className="project_content">
      <div className="project_content_overlay"></div>

      <img className="project_content_img" src={props.image} alt="" />

      <div className="project_content_details fadeIn-top">
        <h3>{props.title}</h3>
        <p className="project_language">{props.language}</p>
        <p>{props.desc}</p>
      </div>

      <div className="project_content_details fadeIn-bottom">
        <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="button-three">
            View site
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectDesc;
