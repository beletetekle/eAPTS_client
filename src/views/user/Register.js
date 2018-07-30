import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import User from '../../services/users.service'

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            account_type:""
        }
    }

    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value });
    };

    handleSubmit = () => {
        const userData={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            accountType:this.state.account_type
        }
        User.register(userData)
            .then(response => {
                this.props.history.push('/home');
            })
            .catch(error => {
                console.error(error);
            });
    };
    render(){
    return (
      <div className="jumbotron">
        <RegisterForm
            onClick={this.handleSubmit}
            onChange={this.onChange}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            account_type={this.state.account_type}
        />
      </div>
    );
  }
}

export default Register;
