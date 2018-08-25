import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from './withAuthentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <UserContext.Consumer>
        { user => !user ? <Redirect to="/login" /> : <Component {...props} /> }
      </UserContext.Consumer>
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
