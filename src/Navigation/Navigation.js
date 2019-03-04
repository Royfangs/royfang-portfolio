import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <NavigationItem link="/" exact={true}>ABOUT</NavigationItem>
      <NavigationItem link="/Portfolio">PORTFOLIO</NavigationItem>
      <NavigationItem link="/contact">CONTACT</NavigationItem>
    </ul>
  );
};

export default Navigation;