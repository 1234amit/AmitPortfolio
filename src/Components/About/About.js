import React from "react";
import "./About.css";
import Me from "../../assets/logo2.jpg";
import CV from "../../assets/amitGoswami.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a Full stack web developer. I have more than 5+ years of
              professional experience in software development. I was working as
              a freelancer web developer for a long time.Currently, I'm working
              as a Full-Stack Developer at THECOO Inc. I have both Frontend and
              Backend software Engineering Knowledge. In Frontend i use React
              js, next js in Backend i use django, node js, Express js and
              Laravel.
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
    </section>
  );
};

export default About;
