import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import firebase from 'lib/firebase';
import {initApp} from 'action/init';

const Container = BaseComponent => {
  class InitShellContainer extends Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        const {init, initApp} = this.props;
        if (!init) initApp();
      });
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    initApp: bindActionCreators(initApp, dispatch),
  });
  InitShellContainer = connect(({init}) => ({init}), mapDispatchToProps)(
    InitShellContainer
  );
  return InitShellContainer;
};

export default Container;
