import React, {Component} from 'react';
import { Link } from 'react-router-dom';    
class Home extends Component {
  render(){
    return (
    
      <div className="jumbotron">
        <h1>eAPTS Ethiopia </h1>
        <p> Reporting Section </p>
        <Link to="/about" className="btn btn-primary btn-lg">Comming Soon ...</Link>
      </div>
    );
  }
}

export default Home;
