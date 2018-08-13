import React, {Component} from 'react';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup, Label, Alert    } from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api from '../../services/api';

class AddPatientForm extends Component {

    constructor(props){
        super(props);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = {
          visible: false,
          errors: [],
          values: {},
        }
      }

      
    handleValidSubmit = (event, values, errors) => {
        this.setState({errors, values});
        Api.create('Patients', values)
            .then((result) => {
              console.log("success", result)
            }).catch((error) => console.log(error));
      }
    
    handleInvalidSubmit = (event, errors, values) => {
        this.setState({errors, values})
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    
    render(){
        return (
            <div>
                <Row className="justify-content-center">
                <Col md="10" xs="12" sm="10">
                    <Alert color="warning" isOpen={this.state.errors && this.state.errors.length > 0} toggle={this.onDismiss}>
                        <strong>Inputs Invalid</strong> Please check your inputs!
                    </Alert>

                    <Card>
                        <CardHeader>
                        <strong>Add Patient</strong>
                        </CardHeader>
                        <CardBody>
                        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                            <AvField type="text" label="Email" id="email" name="email" placeholder="Enter email" required/>
                            <AvField type="password" label="Password" id="password" name="password" placeholder="******" required/>
                            <AvField type="text" label="First Name" id="firstName" name="firstName" placeholder="Enter first name" required/>
                            <AvField type="text" label="Middle Name" id="middleName" name="middleName" placeholder="Enter middle name" required/>
                            <AvField type="text" label="Last Name" id="lastName" name="lastName" placeholder="Enter last name" required/>
                            <AvField type="text" label="Mother Name" id="motherName" name="motherName" placeholder="Enter mother name" required/>
                            <AvField type="text" label="City" id="city" name="city" placeholder="Enter city name" required/>
                            <AvField type="text" label="Woreda" id="woreda" name="woreda" placeholder="Enter worda name" required/>
                            <AvField type="text" label="Kebele" id="kebele" name="kebele" placeholder="Enter kebele name" required/>
                            <AvField type="text" label="Location" id="location" name="location" placeholder="Enter location name" required/>
                            <FormGroup>
                                <Button color="primary">Add</Button>
                            </FormGroup>
                        </AvForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    }
};

export default AddPatientForm;
