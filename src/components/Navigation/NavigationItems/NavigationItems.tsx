import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const navigationItems = () => (
  <ul className='navigation__items'>
    <NavigationItem link='/' exact>
      Store
    </NavigationItem>
    <NavigationItem link='/my-basket'>My Basket</NavigationItem>
  </ul>
);

export default navigationItems;
