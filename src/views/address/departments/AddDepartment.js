import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddDepartment extends Component {
  render(){
    return (
    
      <div>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
                <CardHeader>
                  <strong>Add Department</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="Enter department name" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="health-institute">Health Institute</Label>
                    <Input type="select" name="health-institute" id="health-institute">
                      <option value="">-- Select Health Institute --</option>
                      <option value="health-institute1">Health Institute 1</option>
                      <option value="health-institute2">Health Institute 2</option>
                      <option value="health-institute3">Health Institute 3</option>
                    </Input>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="phone">Phone</Label>
                      <Input type="text" id="phone" placeholder="Enter your phone" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" id="email" placeholder="Enter your email number" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="website">Website</Label>
                      <Input type="text" id="website" placeholder="Enter your Website" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="admin">Admin</Label>
                      <Input type="text" id="admin" placeholder="Enter admin name" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                 
                  <FormGroup>
                    <Button color="primary">Add</Button>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
      </div>
    );
  }
}

export default AddDepartment;
