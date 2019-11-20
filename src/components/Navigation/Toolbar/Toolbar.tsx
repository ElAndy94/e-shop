import React from 'react';

import './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
  <header className='tool__bar'>
    <nav className='desktop__only'>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
