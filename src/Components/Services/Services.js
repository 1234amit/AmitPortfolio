import React from "react";
import image1 from "../../assets/softwareLogo1.png";
import image2 from "../../assets/service-2.svg";
import image3 from "../../assets/web-design1.png";
import "./Services.css";

const data = [
  {
    id: 1,
    image: image1,
    title: "Software Development",
    description:
      "I have a 6+ years of Experience of Software Development. In Software Development I used python and javascript. javascript as a frontend(React js) and backend(Node js, Express js) and also i am using python(Django) as a backend. I had also knowlede of Database. i use MySql, MongoDB, Oracal. In version control i used GIT. I have also Docker knowledge",
  },

  {
    id: 2,
    image: image2,
    title: "Web Development",
    description:
      "I have a 6+ years of Experience of Web Development. In Web Development I used javascript(React js, Node js, Next js), python(Django) and php(Laravel). in frontend web Development i used React js,and Next js. Backend i used Django, Node js, Express js and Laravel.",
  },

  {
    id: 3,
    image: image3,
    title: "Web Design",
    description:
      "I have a 6+ years of Experience of web Design. In Web Design I used HTML, CSS, Bootstrap, Tailwind CSS and SASS. Mostly I used SASS and Tailwind css. Into Frontend single page application i am using also React js and Next js.",
  },
];

const Services = () => {
  return (
    <section className="services section bg-primary" id="services">
      <div className="container">
        <h2 className="section__title">Services</h2>
        <div className="services__container flex">
          {data.map(({ id, image, title, description }) => {
            return (
              <div className="services__card" key={id}>
                <img
                  src={image}
                  alt=""
                  className="services__img"
                  style={{ height: "100px" }}
                />
                <h3 className="services__title">{title}</h3>
                <p className="services__description" style={{ textAlign: "justify" }}>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
