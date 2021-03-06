import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProductList from './components/ProductList/ProductList';
import Basket from './components/Basket/Basket';
import Layout from './components/Layout/Layout';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/basket' component={Basket} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
