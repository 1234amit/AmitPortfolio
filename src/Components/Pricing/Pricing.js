import React, { useEffect, useRef } from "react";
import "./Pricing.css";
import img1 from "../../assets/price-1.svg";
import img2 from "../../assets/price-2.svg";
import img3 from "../../assets/price-3.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#pricing",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section className="pricing section bg-primary" id="pricing">
      <div className="container">
        <h2 className="section__title">Pricing Plans</h2>

        <div className="pricing__container grid">
          <div
            className="pricing__item"
            ref={el => (cardsRef.current[0] = el)}
          >
            <img src={img1} className="pricing__image" />
            <h3 className="pricing__plan">Basic</h3>
            <p className="pricing__title">
              Functional website with HTML, CSS, JS, Bootstrap use frontend and
              django, Node Js as backend.
            </p>
            <p className="pricing__support">Email Support</p>
            <h3 className="price">
              <em>$</em> 120 <span>Month</span>
            </h3>
            <a
              href="https://www.linkedin.com/in/amit-goswami1/"
              className="btn"
            >
              Get Started
            </a>
          </div>

          <div
            className="pricing__item"
            ref={el => (cardsRef.current[1] = el)}
          >
            <img src={img2} className="pricing__image" />
            <h3 className="pricing__plan">Standerd</h3>
            <p className="pricing__title">
              Standerd website with Bootstrap, Tailwind, React Js us fronted and
              django, Node js as backend.
            </p>
            <p className="pricing__support">Email and Video Support</p>
            <h3 className="price">
              <em>$</em> 300 <span>Month</span>
            </h3>
            <a
              href="https://www.linkedin.com/in/amit-goswami1/"
              className="btn"
            >
              Get Started
            </a>
          </div>

          <div
            className="pricing__item"
            ref={el => (cardsRef.current[2] = el)}
          >
            <img src={img3} className="pricing__image" />
            <h3 className="pricing__plan">Premium</h3>
            <p className="pricing__title">
              Custom website with Bootstrap, Tailwind, React.Js use fronted and
              django, Node js as backend.
            </p>
            <p className="pricing__support">Full Support</p>
            <h3 className="price">
              <em>$</em> 700 <span>Month</span>
            </h3>
            <a
              href="https://www.linkedin.com/in/amit-goswami1/"
              className="btn"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
