import React, {Component, Children} from 'react';
import {Switch, Route} from 'react-router';

class AuthShell extends Component {
  loginRedirect = () => {
    const {user, location, loginComponent: Login} = this.props;
    if (user) {
      const {state} = location;
      const to = (state && state.from) || '/';
      return <Redirect to={to} />;
    }
    if (!Login) return null;
    return <Login />;
  };
  appRedirect = () => {
    const {user, children} = this.props;
    if (!user) {
      const {location: from} = this.props;
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from,
            },
          }}
        />
      );
    }
    if (!children) return null;
    return Children.only(children);
  };
  render() {
    return (
      <Switch>
        <Route path="/login" render={this.loginRedirect} />
        <Route path="/" render={this.appRedirect} />
      </Switch>
    );
  }
}

export default AuthShell;
