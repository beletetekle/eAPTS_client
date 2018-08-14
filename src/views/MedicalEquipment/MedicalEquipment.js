import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
class SingleMedicalEquipment extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.medicalEquipment.id}>
        <td>
            {this.props.medicalEquipment.name}
        </td>
        <td>
          {this.props.medicalEquipment.code}
        </td>
        <td>
          {this.props.medicalEquipment.specification}
        </td>
        <td>
          <ButtonGroup>
            <Button color="info" onClick={()=>this.props.onEdit(this.props.medicalEquipment.id,this.props.medicalEquipment.name,this.props.medicalEquipment.code,this.props.medicalEquipment.specification)}><Icon type="edit" /></Button>&nbsp; &nbsp;
            <Button color="danger"  onClick={()=>this.props.onDelete(this.props.medicalEquipment.id)}> <Icon type="delete"/> </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default SingleMedicalEquipment;
