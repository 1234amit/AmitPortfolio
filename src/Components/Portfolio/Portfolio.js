import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="work section bg-primary" id="portfolio">
      <div className="container">
        <h2 className="section__title">Portfolio</h2>

        <div className="work__container grid">
          {items.map((elem) => {
            const { id, image, name, language, project } = elem;

            return (
              <a href={project} className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>

                <span className="work__category">{name}</span>
                <h3 className="work__title">Language Used: {language}</h3>
                <a href={project} className="work__button">
                  <i className="icon-link work__button-icon">
                    <span>PROJECT</span>
                  </i>
                </a>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
