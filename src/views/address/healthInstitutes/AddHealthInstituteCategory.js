import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';   
class AddHealthInstituteCategory extends Component {
  render(){
    return (
    
      <div>
        <Col md={{ size: 8, offset: 2 }}>
        <Card >
              <CardHeader>
                <strong>Add Health Institute Category</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter health institute category name" />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input type="textarea" name="description" id="description" rows="9"
                             placeholder="Enter health institute category description" />
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

export default AddHealthInstituteCategory;
