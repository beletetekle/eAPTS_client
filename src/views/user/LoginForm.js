import React from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';

const LoginForm = (props) => {
    return (
        <Container>
            <Card>
                <CardHeader> HMIS </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Input type="text" onChange={props.onChange} value={props.username} name="username" placeholder="Email" required/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" onChange={props.onChange} value={props.password} name="password" placeholder="password" required/>
                    </FormGroup>
                    <Button onClick={props.onClick}> Login </Button>
                </CardBody>
            </Card>
        </Container>
    );
};

export default LoginForm;