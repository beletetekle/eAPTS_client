import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddHealthInstitute extends Component {
  render(){
    return (
    
      <div>
        <Col md={{ size: 8, offset: 2 }}>
        <Card >
              <CardHeader>
                <strong>Add Health Institute</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter health institute name" />
                </FormGroup>
                <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="region">Region</Label>
                      <Input type="select" name="region" id="region">
                        <option value="">-- Select Region --</option>
                        <option value="region1">Region 1</option>
                        <option value="region2">Region 2</option>
                        <option value="region3">Region 3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="zone">Zone</Label>
                      <Input type="select" name="zone" id="zone">
                        <option value="">-- Select Zone --</option>
                        <option value="zone1">Zone 1</option>
                        <option value="zone2">Zone 2</option>
                        <option value="zone3">Zone 3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="woreda">Woreda</Label>
                      <Input type="select" name="woreda" id="woreda">
                        <option value="">-- Select Woreda --</option>
                        <option value="woreda1">Woreda 1</option>
                        <option value="woreda2">Woreda 2</option>
                        <option value="woreda3">Woreda 3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="category">Category</Label>
                      <Input type="select" name="category" id="category">
                        <option value="">-- Select Category --</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="address">Address</Label>
                      <Input type="text" id="address" placeholder="Enter your address" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="phone">Phone</Label>
                      <Input type="text" id="phone" placeholder="Enter your phone number" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="po_box">PO Box</Label>
                      <Input type="text" id="po_box" placeholder="Enter your PO Box" />
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
                      <Label htmlFor="web">Website</Label>
                      <Input type="text" id="web" placeholder="Enter your website address" />
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
                  <Label htmlFor="description">Description</Label>
                  <Input type="textarea" name="description" id="description" rows="9"
                             placeholder="Enter woreda description" />
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

export default AddHealthInstitute;
