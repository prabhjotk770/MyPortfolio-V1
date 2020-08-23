import React, { useState, useEffect, useRef } from "react";
import Img from "../../assets/mydp.webp";
import { Link } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{ width: "100%", height: "100%" }} ref={myRef}>
      <div className="container homewrapper">
        <div className="imagewrapper">
          <img src={Img} class="card" alt=".." className="imagehome" />
        </div>

        <div className="content-wrapper">
          <div className="container homeContentContainer">
            <div className="hometitle">
              <h1 class="card-title titletext" style={{ color: "#FFFEB8" }}>
                Hey, My name is Prabhjot Kaur
              </h1>
              <div
                class="card-text"
                style={{
                  color: "#FFF4E3",
                }}
              >
                I am currently in my final year pursuing Master's of Computer
                Application.
              </div>
              <div style={{ marginTop: "3em" }}>
                <p style={{ color: "#FFF4E3" }}>Wanna know more about me?</p>
                <div style={{ display: "flex" }}>
                  <Link to="/about">
                    <button
                      type="button"
                      className="button-three"
                      style={{ backgroundColor: "#FF1F5A" }}
                    >
                      Click Here!
                    </button>
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1b8pDyWEMWtxaya5PXvUaLZpEhxpx7Hvx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="button-three"
                      style={{ backgroundColor: "#FF1F5A", marginLeft: "2em" }}
                    >
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
