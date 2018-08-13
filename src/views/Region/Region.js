import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class SingleRegion extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.id.toString()}>
        <td> 
            <a>
            {this.props.name}</a>
        </td>
        <td>{this.props.description}</td>
      </tr>
    )
  }
}

export default SingleRegion;
