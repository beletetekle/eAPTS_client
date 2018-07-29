import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import RegisterForm from './RegisterForm';

class Register extends Component {
  render(){
    return (
      <div className="jumbotron">
        <RegisterForm />
      </div>
    );
  }
}

export default Register;
