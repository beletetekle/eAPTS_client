import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';
import DefaultLayout from './containers/DefaultLayout';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
