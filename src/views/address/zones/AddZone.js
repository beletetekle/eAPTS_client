import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../../services/api';

class AddZone extends Component {

  constructor(props){
    super(props);
    this.state={
      region:""
    }

  }
  componentDidMount(){
    Api.find('Regions',null,null)
    .then((response) =>{

    })
    .catch((error) =>{
        console.log(error);
    });
  }
  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }
  handleValidSubmit(event, values) {
      const ZoneData={
        name:values.name,
        description: values.description,
        region:this.state.region,
    }
    Api.create('Regions',ZoneData,null)
    .then((response) =>{
        this.props.history.push('/zones');
        // todo call the alert
    })
    .catch((error) =>{
        console.log(error);
    });
  }
  render(){

    return (

      <div>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
          <AvForm
                onValidSubmit={this.handleValidSubmit}
                onInvalidSubmit={this.handleInvalidSubmit}>
                <CardHeader>
                  <strong>Add Zone</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <AvField type="text" name="name" id="name" placeholder="Enter zone name" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="region">Region</Label>
                    <AvField
                    type="select"
                     name="region"
                      id="region">
                      <option value="">-- Select Region --</option>
                      <option value="region1">Region 1</option>
                      <option value="region2">Region 2</option>
                      <option value="region3">Region 3</option>
                    </AvField>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <AvField type="textarea" name="description" id="description" rows="9"
                              placeholder="Enter zone description" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="admin">Admin</Label>
                    <AvField type="text" id="admin" name="name" placeholder="Enter admin name" />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary">Add</Button>
                  </FormGroup>
                </CardBody>
              </AvForm>
              </Card>
            </Col>
      </div>
    );
  }
}

export default AddZone;
