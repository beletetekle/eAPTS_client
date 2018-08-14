import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import { message } from 'antd';
import User from '../../services/users.service'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username :"",
      password: "" 
    }
  }

  handleSubmit = () => {
    const username = this.state.username;
    const password = this.state.password;

    User.login(username,password)
    .then(response => {
        if(response.success){
            this.props.history.push('/home');
        }else {
            message.error(response.message);
        }
    })
    .catch(error => {
        message.error(error);
    });
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  }

  render(){
    return (    
      <div className="jumbotron">
        <LoginForm
          onClick={this.handleSubmit}
          onChange={this.onChange}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default Login;
