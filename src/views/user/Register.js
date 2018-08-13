import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    FormGroup,
    Row
} from 'reactstrap';
import {AvField, AvForm} from 'availity-reactstrap-validation';
import UserService from '../../services/users.service';
import Api from '../../services/api';

import ClientSession from '../../services/client-session.js';
import { message } from 'antd';

class Register extends Component {
    constructor() {
        super();
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.enableCreationButton = this.enableCreationButton.bind(this);
        this.state = {
            files: [],
            phone_no: '',
            enableCreate: true,
            roleOptions: [],
            isOwner: false,
        };
    }

    componentDidMount = () => {
      ClientSession.getAuth((err, user) => {
        const roles = user.user.roles.map(val => val.role.name);
        if ( roles.includes('super-admin') ) {
          this.setState({ roleOptions: ['Super Admin', 'Region Admin', 'Zone Admin', 'Woreda Admin', 'Health Center Admin', 'Store Admin', 'Importer Supplier']});
        } else if( roles.includes('region-admin') ) {
            this.setState({ roleOptions: ['Zone Admin', 'Woreda Admin', 'Health Center Admin', 'Store Admin']});
        }else if( roles.includes('zone-admin') ) {
            this.setState({ roleOptions: ['Woreda Admin', 'Health Center Admin', 'Store Admin']});
        }else if( roles.includes('woreda-admin') ) {
            this.setState({ roleOptions: ['Health Center Admin', 'Store Admin']});
        }else if( roles.includes('health-admin') ) {
            this.setState({ roleOptions: ['Store Admin']});
        } else {
          // this.props.history.push('/');
        }
      })
    }

    handleValidSubmit = (event, values) => {
        if (!values.role) values.role = this.state.roleOptions[0];
        this.setState({values});
        if (this.state.files.length) {
            values.file = this.state.files;
            this.fileUpload(this.state.values['file']);
        } else {
            values.emailVerified = true;
            values.password = 'passme'; // TODO: THIS HAS TO BE ENCRYPTED
            values.username = values.email.substring(0, values.email.indexOf('@')) + Math.floor(Math.random() * 10);
            UserService.register(values)
                .then(response => {
                    console.log(response);
                    if (response.success) {
                        message.success(response.message);
                        this.props.history.push('/');
                    } else {
                        message.error(response.message);
                    }
                })
                .catch(error => {
                    console.log("The error is ", error);
                });
        }
    };

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({errors, values});
    };

    fileUpload = (file) => {
        console.log("in file upload state");
        Api.upload('user-photo', file, null)
            .then((response) => {
                    let files = response.data.result.files.data;
                    if (files.length) {
                        let file = files[0];
                        const path = `${Api.API_BASE}Containers/${file.container}/download/${file.name}`;
                        const values = this.state.values;
                        values.image = path;
                        UserService.register(values)
                            .then(response => {
                                if (response.success) {
                                    message.success(response.message);
                                    // this.props.history.push('/login');
                                } else {
                                    message.error(response.message);
                                }
                            })
                            .catch(error => {
                                console.log("The error is ", error);
                            });
                    }
                }
            ).catch((error) => {
            console.log(error)
        });
    };
    handleFileChoose = (event) => {
        this.setState({files: [event.target.files[0]]});
    };
    handleOnChange = (value) => {
        this.setState({
            phone_no: value
        });
    };

    enableCreationButton = (event) => {
        this.setState({enableCreate: this.state.enableCreate ? false : true});
    }

    render(){

        const { roleOptions } = this.state;
        const defaultValues = {role: roleOptions[0]};

        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="p-4">
                                <CardBody>
                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <AvForm onValidSubmit={this.handleValidSubmit}
                                                onInvalidSubmit={this.handleInvalidSubmit}
                                                model={defaultValues}
                                                style={{width: '100%'}}
                                        >
                                            <AvField
                                                bssize="sm"
                                                name="email"
                                                type="email"
                                                label="Email"
                                                placeholder="Email"
                                                validate={{
                                                    email: true,
                                                    required: {
                                                        value: true,
                                                        errorMessage: "Please enter valid email address"
                                                    },

                                                }}
                                            >

                                            </AvField>

                                            <FormGroup>
                                                <AvField
                                                    type="select"
                                                    name="role"
                                                    label="Role"
                                                >
                                                  {
                                                    roleOptions.map(option => <option key={option} value={option}>{ option }</option>)
                                                  }
                                                </AvField>
                                            </FormGroup>
                                          <br/>

                                            <Row>
                                                <Col xs="6">
                                                    <Button color="success" className="px-4">Create Account</Button>
                                                </Col>
                                            </Row>
                                        </AvForm>
                                    </div>


                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }    
}

export default Register;
