import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddWoreda extends Component {
  render(){
    return (
    
      <div>
        <Col md={{ size: 8, offset: 2 }}>
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
                    <Label htmlFor="region">Region</Label>
                    <Input type="select" name="region" id="region">
                      <option value="">-- Select Region --</option>
                      <option value="region1">Region 1</option>
                      <option value="region2">Region 2</option>
                      <option value="region3">Region 3</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="zone">Zone</Label>
                    <Input type="select" name="zone" id="zone">
                      <option value="">-- Select Zone --</option>
                      <option value="zone1">Zone 1</option>
                      <option value="zone2">Zone 2</option>
                      <option value="zone3">Zone 3</option>
                    </Input>
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
            </Col>
      </div>
    );
  }
}

export default AddWoreda;
