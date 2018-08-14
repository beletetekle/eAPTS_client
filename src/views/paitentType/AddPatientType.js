import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

class AddPatientType extends Component {

  constructor(props){
    super(props);
     this.state={
       name:"",
       description:"",
       discount:"",
       isFree:false,
       sponsoredBy:"",
       credit:"",
       insurance:"",
       createdById:"",
        PatientType: [],
        loading:false
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  };

  onChecked(checked) {
    const status = `${checked}`;
    this.setState({isFree: status});
    
  }

  handleValidSubmit() {
      const PatientTypeData = {
        name: this.state.name,
        description: this.state.description,
        discount: this.state.discount,
        isFree: this.state.isFree,
        sponsoredBy: this.state.sponsoredBy,
        credit: this.state.credit,
        insurance: this.state.insurance,
        createdById: this.state.createdById
      }
      
    Api.create('PatientTypes',PatientTypeData,null)
    .then((response) =>{
        console.log("success");
        this.props.history.push('/patient-type');
        
    })
    .catch((error) =>{
        console.log(error);
    });
  }
  render(){
    return (

      <div>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
              <CardHeader>
                <strong>Add Patient Type</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.name} name="name" 
                  placeholder="Enter Patient Type name"
                  validate={{
                    required: {value: true, errorMessage: "Please Enter Patient Type name"},
                  }} />
                </FormGroup>
                <FormGroup row className="my-0">
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={this.onChange} value={this.state.discount} 
                                    name="discount" placeholder="Discount" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                <FormGroup>
                                    <Input type="text" onChange={this.onChange} value={this.state.sponsoredBy} 
                                    name="sponsoredBy" placeholder="sponsored By" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="4">
                                is Free &nbsp;&nbsp;&nbsp;<Switch onChange={()=>this.onChecked()} 
                                    name = "isFree" />
                              </Col>
                </FormGroup>
                  <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={this.onChange} value={this.state.credit} 
                                    name="credit" placeholder="Credit" required/>
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                    <Input type="text" onChange={this.onChange} value={this.state.insurance} 
                                    name="insurance" placeholder="Insurance" required/>
                                </FormGroup>
                              </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input type="textarea" name="description" onChange={this.onChange} id="description" rows="9" value={this.state.description}
                              placeholder="Enter Patient Type description"
                              />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" onClick={()=>this.handleValidSubmit()}>Add</Button>
                </FormGroup>
              </CardBody>
            
            </Card>
        </Col>
      </div>
    );
  }
}

export default AddPatientType;
