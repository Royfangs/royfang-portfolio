import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <NavigationItem link="/" exact={true}>About</NavigationItem>
      <NavigationItem link="/Portfolio">Portfolio</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  );
};

export default Navigation;