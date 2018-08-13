import React, {Component, PropTypes} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router';
import '../../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
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
        <td>2012/01/01</td>
        <td>{this.props.description}</td>
        <td>
          <ButtonGroup>
            <Button color="info" onClick={this.props.OnEdit}><Icon type="edit" /></Button>&nbsp; &nbsp;
            <Button color="danger"  onClick={this.props.onDelete}> <Icon type="delete"/> </Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default SingleRegion;
