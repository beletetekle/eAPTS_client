import React, {Component} from 'react';
import {Alert,Row, Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../../services/api';
import '../../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

import { message } from 'antd';

class AddRegion extends Component {

  constructor(props){
    super(props);
     this.state={
        Regions:[],
        loading:false,
        errorMessage : "",
        errVis : false,
        sucMessage : "",
        sucVis : false,
    }
  }

  messageSuc = ( message )=>{
    this.setState({sucVis: true, sucMessage: message, errVis: false},
      () => setTimeout(() => {
        this.props.history.push('/regions/list');
      }, 2000));
  };

  onDismiss = ()=>{
    this.setState({sucVis : false, errVis : false})
  };

  messageErr =( message )=>{
    this.setState({sucVis : false, errorMessage : message, errVis : true})
  };

  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }
  handleValidSubmit(event, values) {
      const RegionData={
        name:values.name,
        description: values.description}

    Api.create('Regions',RegionData,null)
    .then((response) =>{
      message.success('successfully Created!');
      this.props.history.push('/regions/list');
    })
    .catch((error) =>{
      // this.messageErr('Oops! Create failed!');
        console.log(error);
    });
  }
  render(){
    return (
      <div>
        <Row>
          <Col xs="12" md="12">
                        <Alert color="success" isOpen={this.state.sucVis} toggle={this.onDismiss}>
                        { this.state.sucMessage }
                        </Alert>

                        <Alert color="danger" isOpen={this.state.errVis} toggle={this.onDismiss}>
                        { this.state.errorMessage}
                        </Alert>
          <Card>
          <AvForm
                onValidSubmit={this.handleValidSubmit}
                onInvalidSubmit={this.handleInvalidSubmit}>
              <CardHeader>
                <strong>Add Region</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <AvField type="text" id="name" name="name" placeholder="Enter region name"
                  validate={{
                    required: {value: true, errorMessage: "Please enter region  Name"},
                  }} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <AvField type="textarea" name="description" id="description" rows="4"
                              placeholder="Enter region description"
                              validate={{
                                required: {value: true, errorMessage: "Please enter Project  description"},
                              }} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="admin">Admin</Label>
                  <AvField type="text" id="admin" name="admin" placeholder="Enter admin name"
                  validate={{
                    required: {value: true, errorMessage: "Please enter Admin  name"},
                  }}
                  />
                </FormGroup>
                <FormGroup>
                  <Button color="primary">Add</Button>
                </FormGroup>
              </CardBody>
            </AvForm>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddRegion;
