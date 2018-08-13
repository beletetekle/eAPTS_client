import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Medicine extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const medicineLink=`#/medicine/${this.props.id}`;
    return(
      <tr key={this.props.id.toString()}>
        <td> 
            <a href={medicineLink}>
            {this.props.name}</a>
        </td>
        <td>{this.props.code}</td>
        <td>{this.props.strength}</td>
        <td>{this.props.size}</td>
        <td>{this.props.volume}</td>
      </tr>
    )
  }
}

export default Medicine;
