import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Bin extends Component{
  constructor(props){
    super(props);
  }
  render(){
;
    return(
      <tr key={this.props.id.toString()}>
        <td> 
            {this.props.name}
        </td>
        <td>{this.props.batchno}</td>
        <td>{this.props.issued}</td>
        <td>{this.props.expdate}</td>
      </tr>
    )
  }
}

export default Bin;
