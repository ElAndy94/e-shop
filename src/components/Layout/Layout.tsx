import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
      <Toolbar />
      <main className='Content'>{props.children}</main>
    </>
  );
};

export default Layout;
