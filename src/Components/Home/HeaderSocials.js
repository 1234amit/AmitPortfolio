import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faLinkedin,
  faDribbble,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.youtube.com/@CodingWithGoswami-lw6cz"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>

      <a
        href="https://www.twitter.com"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href="https://www.linkedin.com/in/amit-goswami1/"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://dribbble.com"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faDribbble} />
      </a>

      <a
        href="https://www.pinterest.com"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faPinterest} />
      </a>
    </div>
  );
};

export default HeaderSocials;
