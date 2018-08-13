import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ImporterAndSupplier extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const HFLink = `#/ImporterAndSupplier/${this.props.id}`;
    return(
      <tr key={this.props.id.toString()}>
        <td> 
            <a href={HFLink}>
            {this.props.name}</a>
        </td>
        <td>{this.props.address}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>{this.props.web}</td>
      </tr>
    )
  }
}

export default ImporterAndSupplier;
