/* eslint-disable no-nested-ternary */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from './withAuthentication';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <UserContext.Consumer>
        {user => user ? <Component {...props} /> : <Redirect to="/" />}
      </UserContext.Consumer>
    )}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthRoute;
