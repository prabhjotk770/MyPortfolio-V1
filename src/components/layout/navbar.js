import React from "react";

import { scroller } from "react-scroll";

const Navbar = () => {
  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 500,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <div style={{ position: "sticky", top: "0", zIndex: 100, width: "100%" }}>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#F6A7C1",
        }}
      >
        <a
          onClick={() => ScrollToElement("home")}
          class="navbar-brand"
          href="#!"
        >
          Home
        </a>

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
              <a
                onClick={() => ScrollToElement("about")}
                class="nav-link text-light font-weight-bold"
                href="#!"
              >
                About me <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => ScrollToElement("projects")}
                class="nav-link text-light font-weight-bold"
                href="#!"
              >
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => ScrollToElement("contact")}
                class="nav-link text-light font-weight-bold"
                href="#!"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
