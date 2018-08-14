import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
class SinglePatientType extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.patientType.id}>
        <td>
            {this.props.patientType.name}
        </td>
        <td>
          {this.props.patientType.description}
        </td>
        <td>
          {this.props.patientType.discount}
        </td>
        <td>
          {this.props.patientType.isFree?"true":"false"}
        </td>
        <td>
          {this.props.patientType.sponsoredBy}
        </td>
        <td>
          {this.props.patientType.credit}
        </td>
        <td>
          {this.props.patientType.insurance}
        </td>
        <td>
          {this.props.patientType.createdById}
        </td>
        <td>
          <ButtonGroup>
            <Button color = "info" onClick = {() => this.props.onEdit(this.props.patientType.id, this.props.patientType.name, this.props.patientType.description, this.props.patientType.discount, this.props.patientType.isFree, this.props.patientType.sponsoredBy,this.props.patientType.credit,this.props.patientType.insurance,this.props.patientType.createdById)} > <Icon type = "edit" /> </Button>&nbsp; &nbsp;
            <Button color="danger"  onClick={()=>this.props.onDelete(this.props.patientType.id)}> <Icon type="delete"/> </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default SinglePatientType;
