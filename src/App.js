import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
import withAuthentication from './components/withAuthentication';
import { lazyLoad } from './utils/lazy-loading';

const App = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute path="/login" component={lazyLoad('Login')} />
      <PrivateRoute exact path="/" component={lazyLoad('Home')} />
      <PrivateRoute path="/register" component={lazyLoad('Register')} />
    </Switch>
  </BrowserRouter>
);

export default withAuthentication(App);
