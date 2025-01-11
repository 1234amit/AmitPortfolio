import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span className="home__scroll-name" style={{ color: "white" }}>
          Scroll Down
        </span>
        <span className="mouse" style={{ color: "white" }}>
          <span className="wheel" style={{ color: "white" }}></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
