import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const AddHFForm = (props) => {
    return (
        <div>
            <Row className="justify-content-center">
            <Col md="10" xs="12" sm="10">
                    <Card>
                        
                        <CardBody>
                            <FormGroup row className="my-0">
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.name} 
                                    name="name" placeholder="HF Name" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.phone} 
                                    name="phone" placeholder="HF Phone" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.po_box} 
                                    name="po_box" placeholder="HF PO.Box" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.email} 
                                    name="email" placeholder="HF Email" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.web} 
                                    name="web" placeholder="HF Web" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.address} 
                                    name="address" placeholder="HF Address" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" onChange={props.onChange} value={props.description} 
                                name="description" placeholder="HF Description" required/>
                            </FormGroup>
                            <Button onClick={props.onClick}> Add Health Facility </Button>
                        </CardBody>
                    </Card>
            </Col>
          </Row>
        </div>
    );
};

export default AddHFForm;
