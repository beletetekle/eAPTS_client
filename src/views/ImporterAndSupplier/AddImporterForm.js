import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const AddImporterForm = (props) => {
    return (
        <div>
            <Row className="justify-content-center">
            <Col md="10" xs="12" sm="10">
                    <Card>
                        
                        <CardBody>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.name} 
                                    name="name" placeholder="Importer Name" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.phone} 
                                    name="phone" placeholder="Importer Phone" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.email} 
                                    name="email" placeholder="Importer Email" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.web} 
                                    name="web" placeholder="Importer Web" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.address} 
                                    name="address" placeholder="Importer Address" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <Button onClick={props.onClick}> Add Importer </Button>
                        </CardBody>
                    </Card>
            </Col>
          </Row>
        </div>
    );
};

export default AddImporterForm;
