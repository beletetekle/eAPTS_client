import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Patient extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.id.toString()}>
        <td>{this.props.first_name}</td>
        <td>{this.props.middle_name}</td>
        <td>{this.props.last_name}</td>
        <td>{this.props.woreda}</td>
        <td>{this.props.kebele}</td>
        <td>{this.props.city}</td>      
      </tr>
    )
  }
}

export default Patient;
