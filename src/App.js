import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';
import DefaultLayout from './containers/DefaultLayout';
import Login from './views/user/Login';
import Register from './views/user/Register';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" name="Home" component={Login} />
          <Route path="/register" name="Home" component={Register} />
          <PrivateRoute path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
