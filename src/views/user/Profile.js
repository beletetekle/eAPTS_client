import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import ProfileForm from './ProfileForm'

class Profile extends Component {
  render(){
    return (
      <div className="jumbotron">
        <ProfileForm />
      </div>
    );
  }
}

export default Profile;
