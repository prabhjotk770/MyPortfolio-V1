import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#FF1F5A" }}
    >
      <Link to="/" class="navbar-brand">
        Home
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <Link to="/about" class="nav-link text-light font-weight-bold">
              About me <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/project" class="nav-link text-light font-weight-bold">
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link text-light font-weight-bold">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
