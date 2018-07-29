import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddRegion extends Component {
  render(){
    return (
    
      <div>
        <Card>
              <CardHeader>
                <strong>Add Region</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter region name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input type="textarea" name="description" id="description" rows="9"
                             placeholder="Enter the region description" />
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

export default AddRegion;
