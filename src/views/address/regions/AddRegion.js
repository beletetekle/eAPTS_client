import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../../services/api';

class AddRegion extends Component {

  constructor(props){
    super(props);
     this.state={
        Regions:[],
        loading:false
    }
  }


  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }
  handleValidSubmit(event, values) {
      const RegionData={
        name:values.name,
        description: values.description,
    }
    Api.create('Regions',RegionData,null)
    .then((response) =>{
        this.props.history.push('/regions');
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
                  <AvField type="textarea" name="description" id="description" rows="9"
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
      </div>
    );
  }
}

export default AddRegion;
