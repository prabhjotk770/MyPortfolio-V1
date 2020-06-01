import React from "react";
import github from '../../assets/github-logo.png'
import {
  EmailIcon,
  LinkedinIcon,
  TwitterIcon
} from "react-share";



const Contact = () => {

  return (
    <div style={{height:"42em"}}>
      <h2 style={{ textAlign: "center" , padding:"1px" }}> Getting in touch is easy!!</h2>
      <div class="card-body">
        Below are my social media account
        <br />
        <a href="https://twitter.com/PrabhKaur770" target="_blank" rel="noopener noreferrer">
          <TwitterIcon size={52} round={true} />
        </a>
        <span> </span>
        
        <a href="mailto:prabhjotk770@gmail.com">
          <EmailIcon size={52} round={true} />
        </a>
        <span> </span>
        <a href="https://www.linkedin.com/in/prabhjotk770" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon size={52} round={true} />
        </a>
        <span> </span>
        <a href="https://github.com/prabhjotk770" target="_blank" rel="noopener noreferrer">
        <img
    src={github}
    alt=".."
    style={{
      width:"3em",
      height:"3em"
     

    }}
  />
  </a>
        
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h4>Any Queries or Suggestions?</h4>
        <h5>I'd <svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> to respond!!</h5>
      </div>
      <form
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
           
            class="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
           
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Feedback/Message</label>
          <textarea
            class="form-control"
           
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
