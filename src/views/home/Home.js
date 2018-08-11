import React, {Component} from 'react';
import { Link } from 'react-router-dom';    
class Home extends Component {
  render(){
    return (
    
      <div className="jumbotron">
        <h1>Home</h1>
        <p> Hello World!</p>
        <Link to="/about" className="btn btn-primary btn-lg">More...</Link>
      </div>
    );
  }
}

export default Home;
