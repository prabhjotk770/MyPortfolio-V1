import React from "react";
import calculator from "../../../assets/calc2.png";
import Img1 from "../../../assets/plant.png";
import { Link } from "react-router-dom";

const Calc = () => {
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
         backgroundImage: `url(${calculator})`,
         backgroundRepeat:"no-repeat",
         backgroundPosition:"cover",
         backgroundsize: "800px 800px"
       }}
     >
       
        <div
          class="card-text clocktext" style={{  fontSize:"large",fontWeight:"bolder"}}
          
        >
          This is the calculator web application which does simple calculations.
          It is made using javascript,CSS,HTML languages on React framework.{" "}
          <br />
          <b style={{color:"#f3f169"}}>Click on the link below and get a glimpse of the application.</b>
          <br />
          
          <a href="https://p413h.csb.app/" class="btn btn-primary btn-lg active" 
          role="button" aria-pressed="true" style={{width:"60%"}}>My Calculator</a>
        </div>
        <Link to="/quiz">
          <button
            type="button"
            className="button-three"
            style={{backgroundColor: "#FF1F5A" , marginTop:"3em"  , width:"7em"}}
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
export default Calc;
