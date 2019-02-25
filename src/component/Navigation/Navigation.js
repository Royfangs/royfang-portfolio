import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
  const fixedClassName = props.NavigationFixed ? 'Navigation Navigation--fixed' : 'Navigation';

  return (
    <ul className={fixedClassName}>
      <NavigationItem link="/" exact={true}>About</NavigationItem>
      <NavigationItem link="/Portfolio">Portfolio</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  );
};

export default Navigation;