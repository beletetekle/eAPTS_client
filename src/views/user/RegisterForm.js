import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const RegisterForm = (props) => {
    return (
        <div>
            <Container>
                <Card>
                    <CardHeader> eAPTS </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Input type="text" onChange={props.onChange} value={props.username} name="username" placeholder="UserName" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" onChange={props.onChange} value={props.email} name="email" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" onChange={props.onChange} value={props.password} name="password" placeholder="Password" required/>
                        </FormGroup>
                        <FormGroup >
                            <Input type="select" name="account_type" id="type" onChange={props.onChange}>
                                <option value="admin">Admin </option>
                                <option value="Pharmacist">Pharmacist</option>
                                <option value="Physician">Physician</option>
                                <option value="patient">patient </option>
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
