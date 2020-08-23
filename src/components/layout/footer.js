import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    // <footer
    //   class="page-footer font-small blue pt-4"
    //   style={{
    //     backgroundColor: "black",

    //   }}
    // >
    //   <div class="footer-copyright text-white text-center py-3">
    //     © 2020 Copyright

    //     <a href="/" style={{textDecoration:"none" , color:"green" , fontSize:"1.4em" , fontWeight:"bolder" }}> prabhjotkaur</a>

    //   </div>
    // </footer>
    <footer className="footer">
      <div className="footer_copyright">© 2020 Copyright</div>
      <div className="footer_link">
        <Link>prabhjotkaur</Link>
      </div>
    </footer>
  );
};

export default Footer;
