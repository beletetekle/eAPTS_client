import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

class AddDiagnostic extends Component {

  constructor(props){
    super(props);
     this.state={
       name:"",
       symptom: "",
       medicine:"",
       discoveredBy: "",
       caution: "",
        Diagnostic: [],
        loading:false
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  };

  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }
  handleValidSubmit(event, values) {
      const DiagnosticData = {
        name: this.state.name,
        symptom: this.state.symptom.split(','),
        medicine: this.state.medicine.split(','),
        discoveredBy: this.state.discoveredBy,
        caution: this.state.caution
      }
      
    Api.create('Diagnostics', DiagnosticData, null)
    .then((response) =>{
        console.log("success");
        this.props.history.push('/diagnostic');
        
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
                <strong>Add Diagnostic</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.name} name="name" 
                  placeholder="Enter Diagnostic name"
                  validate={{
                    required: {value: true, errorMessage: "Please Diagnostic name"},
                  }} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="Medicen">Discovered By</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.discoveredBy} 
                                    name="discoveredBy" placeholder="discovered By" required/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="symptom">Symptom</Label>
                  <Input type="textarea" onChange={this.onChange} value={this.state.symptom} name="symptom" rows="4"
                  placeholder="Symptom"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="Medicen">Medicen</Label>
                  <Input type="textarea" onChange={this.onChange}value={this.state.medicine} name="medicine" rows="4"
                  placeholder = "Medicen"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="caution">Caution</Label>
                  <Input type="textarea" name="caution" onChange={this.onChange} id="description" rows="4"
                              placeholder="caution" value={this.state.caution} 
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

export default AddDiagnostic;
