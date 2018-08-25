import React, { Component, createContext } from 'react';

import { getAuthStatus } from '../services/auth';

export const UserContext = createContext(null);

export default function withAuthentication(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        user: null,
      };
    }

    componentWillMount() {
      this.setState({ user: getAuthStatus().user });
    }

    render() {
      const { user } = this.state;

      return (
        <UserContext.Provider value={user}>
          <WrappedComponent />
        </UserContext.Provider>
      );
    }
  };
}
