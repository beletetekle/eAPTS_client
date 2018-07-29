import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import LoginForm from './LoginForm'

class Login extends Component {
  render(){
    return (    
      <div className="jumbotron">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
