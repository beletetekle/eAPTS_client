import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
class SingleDTP extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <tr key={this.props.dtp.id}>
        <td>
            {this.props.dtp.title}
        </td>
        <td>
          {this.props.dtp.description}
        </td>
        <td>
          {this.props.dtp.medicine}
        </td>
        <td>
          <ButtonGroup>
            <Button color="info" onClick={()=>this.props.onEdit(this.props.dtp.id,this.props.dtp.title,this.props.dtp.description,this.props.dtp.medicine)}><Icon type="edit" /></Button>&nbsp; &nbsp;
            <Button color="danger"  onClick={()=>this.props.onDelete(this.props.dtp.id)}> <Icon type="delete"/> </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default SingleDTP;
