import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup    } from 'reactstrap';
import Api  from '../../services/api';

const medicine_url=""

class NewBin extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            expdate:"",
            issued:"",
            received:"",
            remark:"",
            medicine:"",
            medicine_list: ["M1","M2", "M3"]
        }
    }
    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value });
    };

    handleSubmit=() =>{
        const medicineBin={
            name:this.state.name,
            expiryDate:this.state.expdate,
            issued:this.state.issued,
            received:this.state.received,
            remark:this.state.remark
        }
        Api.create('MedicineBins',medicineBin,null)
        .then((response) =>{
            this.props.history.push('/home');
            // todo call the alert
        })
        .catch((error) =>{
            console.log(error);
        });

    }
    render(){
        return(
            <div>
            <Row className="justify-content-center">
            <Col md="10" xs="12" sm="10">
                    <Card>
                        <CardHeader> Add Medicine Batch </CardHeader>
                        <CardBody>
                            <FormGroup row className="my-0">
                                <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={this.onChange} value={this.state.name} 
                                        name="name" placeholder="Name" required/>
                                </FormGroup>
                                </Col>
                                <Col xs="6">
                                <FormGroup>
                                    <Input type="select" onChange={this.onChange} name="medicine" required>
                                    {this.state.medicine_list.map((med, idx)=> {
                                            return(
                                                <option key={idx}>{med}</option>
                                            );
                                        })}
                                    </Input>
                                </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="number" onChange={this.onChange} value={this.state.received} 
                                    name="received" placeholder="Received"/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="number" onChange={this.onChange} value={this.state.issued}
                                     name="issued" placeholder="Issued"/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="date" onChange={this.onChange} value={this.state.expdate} 
                                    name="expdate" placeholder="Expiry Date" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="number" onChange={this.onChange} value={this.state.remark}
                                     name="remark" placeholder="Remark"/>
                                </FormGroup>
                              </Col>
                            </FormGroup>
                            <Button onClick={this.handleSubmit}> Register </Button>
                        </CardBody>
                    </Card>
            </Col>
          </Row>
        </div>
        )
    }
}

export default NewBin;