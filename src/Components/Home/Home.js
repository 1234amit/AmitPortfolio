// import React from "react";
// import Me from "../../assets/logo2.jpg";
// import HeaderSocials from "./HeaderSocials";
// import "./Home.css";
// import ScrollDown from "./ScrollDown";

// const Home = () => {
//   return (
//     <section className="home container" id="home">
//       <div className="intro">
//         <img src={Me} className="home__img" />
//         <h1 className="home__name">Amit Kumar Goswami</h1>
//         <span className="home__education">
//           I am a Full Stack Software Engineer.
//         </span>

//         <HeaderSocials />

//         <a href="https://www.linkedin.com/in/amit-goswami1/" className="btn">
//           Hire Me
//         </a>
//         <ScrollDown />
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import Me from "../../assets/logo2.jpg";
import HeaderSocials from "./HeaderSocials";
import "./Home.css";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home bg-primary" id="home" style={{}}>
      <div className="container">
        <div className="intro">
          <img src={Me} alt="Amit Kumar Goswami" className="home__img" />
          <h1 className="home__name">Amit Kumar Goswami</h1>
          <p className="home__education">
            I am a <span>Full Stack Software Engineer</span>.
          </p>
          <HeaderSocials />
          <a
            href="https://www.linkedin.com/in/amit-goswami1/"
            className="btn btn-primary"
          >
            Hire Me
          </a>
          <div className="scrollDown">
            <ScrollDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
