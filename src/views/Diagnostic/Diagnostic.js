import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
class SingleDiagnostic extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.diagnostic.id}>
        <td>
            {this.props.diagnostic.name}
        </td>
        <td>
          {this.props.diagnostic.symptom.join(',')}
        </td>
        <td>
          {this.props.diagnostic.medicine.join(',')}
        </td>
        <td>
          {this.props.diagnostic.discoveredBy}
        </td>
        <td>
          {this.props.diagnostic.caution}
        </td>
        <td>
          <ButtonGroup>
            <Button color = "info" onClick = {() => this.props.onEdit(this.props.diagnostic.id, this.props.diagnostic.name, this.props.diagnostic.symptom, this.props.diagnostic.medicine, this.props.diagnostic.discoveredBy, this.props.diagnostic.caution)} > <Icon type = "edit" /> </Button>&nbsp; &nbsp;
            <Button color="danger"  onClick={()=>this.props.onDelete(this.props.diagnostic.id)}> <Icon type="delete"/> </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default SingleDiagnostic;
