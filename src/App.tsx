import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './components/ProductList/ProductList';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <p>Navbar</p>
      <Switch>
        <Route exact path='/' component={ProductList} />
      </Switch>
      <p>Modal</p>
    </>
  );
};

export default App;
