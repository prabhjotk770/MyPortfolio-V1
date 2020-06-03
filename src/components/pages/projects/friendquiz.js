import React from "react";
import friends from "../../../assets/friendsimg.webp";
import Img1 from "../../../assets/plant.webp";
import { Link } from "react-router-dom";

const Friendship = () => {
  return (
    <div class="container">
      <div class= "row">
        <div class="col">
        <div class="d-flex justify-content-center">
        <div
        class="card clockwrapper"
        style={{
          display: "flex",
          justifyContent:"center",
          alignItems: "flex-start",
          
          height: "30em",
          width: "50em",
          marginTop: "5em",
          backgroundImage: `url(${friends})`,
          backgroundRepeat:"no-repeat",
          backgroundPosition:"cover"

        }}
      >
       
        <div
          class="card-text clocktext"  style={{ width:"100%", fontSize:"large",fontWeight:"bolder"}}
        >
          
      
          This is Friendship quiz web application. It is a fun application
          you can use to know how well your friends know you. It is made using
          javascript,CSS,HTML languages on React and Nodejs framework. <br />
          <b style={{color:"#f3f169"}}>Click on the link below and get a glimpse of the application.</b>
          <br/>
          
          <a href="https://friendshipquiz.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg active" 
          role="button" aria-pressed="true" style={{width:"60%"}}>Friendship Quiz</a>
         
       
        </div>
        <Link exact to="/project">
          <button
            type="button"
            className="button-three"
            style={{backgroundColor: "#FF1F5A" , position:"absolute", bottom:"2em", width:"7em"}}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
    </div>
    </div>

    <div class="row">
  <div class="col">
  <div>
    <img
    src={Img1}
    alt=".."
    style={{
      display:"flex",
     

    }}
  />
  </div> 
</div>
</div>
</div>
  );
};
export default Friendship;
