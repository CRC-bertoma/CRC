import React, { useState, useEffect } from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Bounce } from "react-reveal";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Navbar from "../navbar/Navbar";
import config from "../../config";
import profile from "../../images/profile-bgdark.png";
import linkedinLogo from "../../images/social/linkedin.png";
import githubLogo from "../../images/social/github.png";
import mailLogo from "../../images/social/mail.png";
import cvLogo from "../../images/social/curriculum-vitae.png";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const [conf, setConf] = useState(config.particles);
  React.useEffect(() => {
    let tmp = config.particles;
    const amount = Math.floor(window.innerWidth / 40);
    tmp.particles.number = { value: amount }
    console.log("🚀 ~ file: Home.js ~ line 30 ~ handleResize ~ amount", amount)
    setConf(tmp)
  }, [])
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          className="particles"
          params={conf}
          init={particlesInit}
        />
        <div className={`greeting${!imageLoaded ? " hide" : ""}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Marco Bertolino</span>.{" "}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    "I am a full stack web developer💻.",
                    "I am studying cybersecurity for cloud☁️.",
                    "I love blockchain⛓.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,

                  cursor: "<",
                  delay: 50,
                }}
              />
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10vh"
              }}
            >
              <Bounce cascade>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/marco-bertolino-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={linkedinLogo}
                      alt="Linkedin Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
              <Bounce cascade>
                <div className="links">
                  <a
                    href="https://github.com/bertomaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={githubLogo}
                      alt="Github Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
              <Bounce cascade>
                <div className="links">
                  <a
                    href="mailto:marcobertolino.developer@gmail.com"
                  >
                    <img
                      className="logoImage"
                      src={mailLogo}
                      alt="Github Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
              <Bounce cascade>
                <div className="links">
                  <a
                    href="./MarcoBertolino-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={cvLogo}
                      alt="CV Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
            </div>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{
                    pointerEvents: "fill",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
