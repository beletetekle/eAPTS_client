import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 

class About extends Component {
  render(){
    return (
    
      <div className="jumbotron">
        <h1>About</h1>
        <p>The quick brown fox jumps over the lazy dog!</p>
        <Link to="/home" className="btn btn-primary btn-lg">Go Back</Link>
      </div>
    );
  }
}

export default About;
