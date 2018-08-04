import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const NewMedicieneForm = (props) => {
    return (
        <div>
            <Row className="justify-content-center">
            <Col md="10" xs="12" sm="10">
                    <Card>
                        <CardHeader> Add Mediciene </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Input type="text" onChange={props.onChange} value={props.name} 
                                name="name" placeholder="Name of the medicine" required/>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.code} 
                                    name="code" placeholder="Code" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.size}
                                     name="strength" placeholder="Srength" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.volume} 
                                    name="volume" placeholder="Volume" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={props.onChange} value={props.size} 
                                    name="size" placeholder="Size" required/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                           
                            <Button onClick={props.onClick}> Register </Button>
                        </CardBody>
                    </Card>
            </Col>
          </Row>
        </div>
    );
};

export default NewMedicieneForm;
