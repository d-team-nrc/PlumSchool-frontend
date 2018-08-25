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
      <PrivateRoute path="/" component={lazyLoad('Home')} />
    </Switch>
  </BrowserRouter>
);

export default withAuthentication(App);
