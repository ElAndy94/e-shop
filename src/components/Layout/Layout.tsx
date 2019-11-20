import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
