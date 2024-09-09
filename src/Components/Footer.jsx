import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 flex justify-around">
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.facebook.com/your-facebook-profile-link" target="_blank" className="text-[28px] hover:text-blue-500 transition duration-300">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://github.com/FaizAli00" target="_blank" className="text-[28px] hover:text-blue-500 transition duration-300">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/faizu.ali9991" target="_blank" className="text-[28px] hover:text-blue-500 transition duration-300">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/faiz-ali009" target="_blank" className="text-[28px] hover:text-blue-500 transition duration-300">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="text-center mt-4 text-lg">Follow us on social media</p>
    </footer>
  );
};

export default Footer;