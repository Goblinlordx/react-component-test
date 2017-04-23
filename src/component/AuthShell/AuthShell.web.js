import React, {Component, Children} from 'react';
import {Switch, Route, Redirect} from 'react-router';

class AuthShell extends Component {
  loginRedirect = () => {
    const {user, location, loginComponent: Login} = this.props;
    if (user) {
      const state = location && location.state;
      const to = (state && state.from) || '/';
      return <Redirect to={to} />;
    }
    if (!Login) return null;
    return <Login />;
  };
  appRender = () => {
    const {children} = this.props;
    return (children && Children.only(children)) || null;
  };
  render() {
    return (
      <Switch>
        <Route path="/login" render={this.loginRedirect} />
        <Route path="/" render={this.appRender} />
      </Switch>
    );
  }
}

export default AuthShell;
