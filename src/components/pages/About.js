import React from "react";
import aboutimage from "../../assets/aboutimage.webp";
import Img1 from "../../assets/plant.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (

     <div class="container aboutwrapper" >
      <div class="row" style={{display:"flex"}} >

      <div class="col-sm" style={{fontfamily: "Lucida Console"}}>
          <h2> About Prabhjot</h2>
            <svg class="bi bi-arrow-right-square-fill" width="3em" height="3em"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm5.646 10.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
            </svg>
       </div>

         
      <div class="col-sm" style={{display:"flex"}}>
      <div 
    
    >
      I like to code and develop web applications.
      <br />
      Following are my skills: 😍😍
      <br />
      <b>Languages i am good at: </b>
      
      <i>C++, javascript, CSS, HTML, and java</i><br/>
      
     <b> Libraries and Frameworks i have used:</b><br/>
      
     <i>Bootstrap, Material UI, Express and React</i> <br/>
     
     <strong> I prefer to keep learning and continue challanging myself.</strong>
      <br />
      <div >
      <h3>feel free to have a look at my latest projects. <svg class="bi bi-emoji-sunglasses" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 0 0-.036-.053.86.86 0 0 0-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 0 0-.271.194.213.213 0 0 0-.036.054l-.003.01z"/>
  <path d="M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM9 5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-2-2V5z"/>
</svg></h3>
      <br />
      <Link to="/project">
        <button
          type="button"
          className="button-three"
          
        >
          Click Me :)
        </button>
      </Link>
      </div>
    </div>
    </div>

    <div class="col-sm" style={{display:"flex" }}>
    <img
          src={aboutimage}
          class="card"
          alt="aboutimage"
          className="aboutimage"
         
        />
  
      </div>
</div>
<div class="row">
  <div class="col-sm">
  <div class="aboutpl">
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
export default About;



