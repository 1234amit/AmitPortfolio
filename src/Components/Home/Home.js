import React, { useEffect, useRef } from "react";
import Me from "../../assets/logo2.jpg";
import HeaderSocials from "./HeaderSocials";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import gsap from "gsap";

const Home = () => {
  const name = "Amit Kumar Goswami";
  const splitName = name.split("").map((char, idx) =>
    <span className="split-letter" key={idx}>{char === " " ? "\u00A0" : char}</span>
  );
  const nameRef = useRef();
  const introRef = useRef();

  useEffect(() => {
    // Animate split header
    gsap.fromTo(
      nameRef.current.querySelectorAll(".split-letter"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    // Animate all other intro children (except split header)
    gsap.fromTo(
      introRef.current.querySelectorAll(".intro-animate"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7 // start after split header
      }
    );

    // Animate ScrollDown (bounce effect)
    gsap.fromTo(
      "#scrollDownAnim",
      { y: 0 },
      {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
        delay: 1.2 // after other animations
      }
    );
  }, []);

  return (
    <section className="home bg-primary" id="home" style={{}}>
      <div className="container">
        <div className="intro" ref={introRef}>
          <img src={Me} alt="Amit Kumar Goswami" className="home__img intro-animate" />
          <h1 className="home__name" ref={nameRef}>{splitName}</h1>
          <p className="home__education intro-animate">
            I am a <span>Full Stack Software Engineer</span>.
          </p>
          <div className="intro-animate">
            <HeaderSocials />
          </div>
          <a
            href="https://www.linkedin.com/in/amit-goswami1/"
            className="btn btn-primary intro-animate"
          >
            Hire Me
          </a>
          <div className="scrollDown intro-animate" id="scrollDownAnim">
            <ScrollDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
