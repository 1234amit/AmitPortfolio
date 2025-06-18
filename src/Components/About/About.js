import React, { useRef, useEffect } from "react";
import "./About.css";
import Me from "../../assets/logo2.jpg";
import CV from "../../assets/amitGoswami.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef();
  const dataRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
    gsap.fromTo(
      dataRef.current,
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: dataRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section className="about section bg-primary" id="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
          <img ref={imgRef} src={Me} alt="" className="about__img" />

          <div ref={dataRef} className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                I am a Full stack web developer. I have more than 5+ years of
                professional experience in software development. I was working
                as a freelancer web developer for a long time.Currently, I'm
                working as a Full-Stack Developer at THECOO Inc. I have both
                Frontend and Backend software Engineering Knowledge. In Frontend
                i use React js, next js in Backend i use django, node js,
                Express js and Laravel.
              </p>

              <a href={CV} className="btn">
                Download CV
              </a>
            </div>

            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Software Development</h3>
                  <span className="skills__number">90%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Web Design</h3>
                  <span className="skills__number design">80%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage development1"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Web Devlopment</h3>
                  <span className="skills__number">85</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage development2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
