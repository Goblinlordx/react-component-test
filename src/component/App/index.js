import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from 'store';
import InitShell from 'component/InitShell';
import AuthShell from 'component/AuthShell';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <InitShell>
            <AuthShell>
              <div className="App">
                <div className="App-header">
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit
                  {' '}
                  <code>src/App.js</code>
                  {' '}
                  and save to reload.
                </p>
              </div>
            </AuthShell>
          </InitShell>
        </Router>
      </Provider>
    );
  }
}

export default App;
