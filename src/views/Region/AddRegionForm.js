import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const AddRegionForm = (props) => {
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
                                    name="name" placeholder="Region Name" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                              </Col>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" onChange={props.onChange} value={props.description} 
                                name="description" placeholder="Region Description" required/>
                            </FormGroup>
                            <Button onClick={props.onClick}> Add Region </Button>
                        </CardBody>
                    </Card>
            </Col>
          </Row>
        </div>
    );
};

export default AddRegionForm;
