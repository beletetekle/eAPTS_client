import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class HealthFacility extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const HFLink=`#/HF/${this.props.id}`;
    return(
      <tr key={this.props.id.toString()}>
        <td> 
            <a href={HFLink}>
            {this.props.name}</a>
        </td>
        <td>{this.props.description}</td>
        <td>{this.props.address}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.po_box}</td>
        <td>{this.props.email}</td>
        <td>{this.props.web}</td>
      </tr>
    )
  }
}

export default HealthFacility;
