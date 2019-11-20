import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const navigationItem = (props: any) => (
  <li className='navigation__item'>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName='navigation__item active'
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
