import React from "react";

import { MDBRow, MDBCol } from "mdbreact";

import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="m-3">
      <h2 className="text-center p-1">Getting in touch is easy!!</h2>
      <hr
        style={{ backgroundColor: "#feadb9", height: "4px", width: "300px" }}
      />

      <div className="p-md-5 row">
        <div className="col-md-7 col-sm-12">
          <Fade left>
            <div className="ml-md-3">
              <h4>Any Queries or Suggestions?</h4>
              <h5>
                I'd{" "}
                <svg
                  class="bi bi-heart"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>{" "}
                to respond!!
              </h5>
            </div>

            <form method="post" className="ml-md-3 mr-md-3">
              <input type="hidden" name="form-name" value="Contact" />
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter name"
                  name="name"
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
                  name="email"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Feedback/Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                value="send"
                style={{ backgroundColor: "#FF1F5A", borderColor: "#FF1F5A" }}
              >
                Submit
              </button>
            </form>
          </Fade>
        </div>

        <div className="col-md-5 col-sm-12 ">
          <Fade right>
            <div>
              <h5 className="ml-md-4"> Below are my social media accounts</h5>
              <br />
              <div className="d-flex justify-content-around ">
                <a
                  href="https://twitter.com/PrabhKaur770"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar className={classes.pink}>
                    <TwitterIcon />
                  </Avatar>
                </a>
                <span> </span>
                <a href="mailto:prabhjotk770@gmail.com">
                  <Avatar className={classes.pink}>
                    <EmailIcon />
                  </Avatar>
                </a>
                <span> </span>
                <a
                  href="https://www.linkedin.com/in/prabhjotk770"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar className={classes.pink}>
                    <LinkedInIcon />
                  </Avatar>
                </a>
                <span> </span>
                <a
                  href="https://github.com/prabhjotk770"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar className={classes.pink}>
                    <GitHubIcon />
                  </Avatar>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Contact;
