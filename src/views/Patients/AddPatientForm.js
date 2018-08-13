import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup, Label    } from 'reactstrap';

const AddPatientForm = (props) => {
    return (
        <div>
            <Row className="justify-content-center">
            <Col md="10" xs="12" sm="10">
                <Card>
                    <CardHeader>
                    <strong>Add Patient</strong>
                    </CardHeader>
                    <CardBody>
                    <FormGroup>
                        <Label htmlFor="last_name">First Name</Label>
                        <Input type="text" id="first_name" placeholder="Enter first name" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input type="text" id="last_name" placeholder="Enter last name" />
                    </FormGroup>
                    
                    
                    <FormGroup>
                        <Button color="primary">Add</Button>
                    </FormGroup>
                    </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
    );
};

export default AddPatientForm;
