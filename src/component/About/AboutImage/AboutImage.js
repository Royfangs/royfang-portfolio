import React from 'react';
import './AboutImage.scss';
import portfolio from '../../../asset/portfolio.jpg';


const AboutImage = () => (
<div className="AboutImage">
  <img className="AboutImage__photo" src={portfolio} alt="photo" />
</div>
);

export default AboutImage;