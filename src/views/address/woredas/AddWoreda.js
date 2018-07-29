import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddWoreda extends Component {
  render(){
    return (
    
      <div>
        <Card>
              <CardHeader>
                <strong>Add Woreda</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter woreda name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Region</Label>
                  <Input type="text" id="region" disabled="true" placeholder="Region" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Zone</Label>
                  <Input type="text" id="zone" disabled="true" placeholder="Zone" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input type="textarea" name="description" id="description" rows="9"
                             placeholder="Enter woreda description" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="admin">Admin</Label>
                  <Input type="text" id="admin" placeholder="Enter admin name" />
                </FormGroup>
                <FormGroup>
                  <Button color="primary">Add</Button>
                </FormGroup>
              </CardBody>
            </Card>
      </div>
    );
  }
}

export default AddWoreda;
