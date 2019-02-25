import React from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => (
  <li>
    <NavLink
      className="NavigationItem"
      activeClassName="NavigationItem--active"
      to={props.link} 
      exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;