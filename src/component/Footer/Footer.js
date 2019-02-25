import React from 'react';
import './Footer.scss';
import SocialMedia from '../../container/SocialMedia/SocialMedia';

const Footer = () => (
  <footer className="Footer">
    <SocialMedia/>
    <div className="Footer__copyright">
      &copy; 2019 ROY FANG
    </div>
  </footer>
);

export default Footer;
