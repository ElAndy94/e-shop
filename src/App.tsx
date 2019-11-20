import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './components/ProductList/ProductList';
import Basket from './components/ProductList/ProductList';
import Layout from './components/Layout/Layout';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/basket' component={Basket} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
