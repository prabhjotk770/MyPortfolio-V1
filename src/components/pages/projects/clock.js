import React from "react";
import clock from "../../../assets/clock1.jpg";
import Img1 from "../../../assets/plant.png";
import { Link } from "react-router-dom";
const Clock = () => {
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
          backgroundImage: `url(${clock})`,
          backgroundRepeat:"no-repeat",
          backgroundPosition:"cover"
        }}
      >
       
        <div
          class="card-text clocktext"  style={{  fontSize:"large",fontWeight:"bolder"}}
        >
          This is the simple clock web application which shows current date and
          time. It is made using javascript,CSS,HTML languages on React
          framework. <br />
          <b style={{color:"#f3f169"}}>Click on the link below and get a glimpse of the application.</b>
          <br />
          
          <a href="https://csb-oiee3-pswz8zudv.now.sh/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style={{width:"50%"}}>My Clock</a>



          


        </div>
        <Link to="/calc">
          <button
            type="button"
            className="button-three"
            style={{backgroundColor: "#FF1F5A" , marginTop:"5em"  , width:"7em"}}
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
   <div >
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
export default Clock;
