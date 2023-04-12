import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faBehance, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons';


const HeaderSocials = () => {
  return (
    <div className='home__socials'>
        <a href='https://www.instagram.com' className='home__social-link' target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href='https://www.twitter.com' className='home__social-link' target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href='https://www.behance.net' className='home__social-link' target="_blank">
            <FontAwesomeIcon icon={faBehance} />
        </a>

        <a href='https://dribbble.com' className='home__social-link' target="_blank">
            <FontAwesomeIcon icon={faDribbble} />
        </a>

        <a href='https://www.pinterest.com' className='home__social-link' target="_blank">
            <FontAwesomeIcon icon={faPinterest} />
        </a>
    </div>
  )
}

export default HeaderSocials