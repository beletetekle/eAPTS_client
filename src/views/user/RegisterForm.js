import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const RegisterForm = (props) => {
    return (
        <div>
            <Container>
                <Card>
                    <CardHeader> HMIS </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Input type="text" onChange={props.onChange} value={props.username} name="username" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" onChange={props.onChange} value={props.email} name="email" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" onChange={props.onChange} value={props.password} name="password" placeholder="password" required/>
                        </FormGroup>
                        <FormGroup row>
                            <Input type="select" name="accountTYpe" id="type" onChange={props.onChange}>
                                <option value="0">Please select Account type</option>
                                <option value="1">Admin </option>
                                <option value="2">Pharmacist</option>
                                <option value="3">Physician</option>
                                <option value="4">patient </option>
                            </Input>
                        </FormGroup>
                        <Button onClick={props.onClick}> Register </Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default RegisterForm;
