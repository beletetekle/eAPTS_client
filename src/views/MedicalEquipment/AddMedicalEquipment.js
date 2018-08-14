import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

class AddMedicalEquipment extends Component {

  constructor(props){
    super(props);
     this.state={
       name:"",
       code: "",
       specification: "",
        MedicalEquipment: [],
        loading:false
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  };

 
  handleValidSubmit(event, values) {
      const MedicalEquipmentData = {
        name: this.state.name,
        code: this.state.code,
        specification: this.state.specification
      }
      
    Api.create('MedicalEquipments', MedicalEquipmentData, null)
    .then((response) =>{
        console.log("success");
        this.props.history.push('/medical-equipmnet');
        
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
                <strong>Add Medical Equipment</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.name} name="name" 
                  placeholder="Enter Medical Equipment name"
                  validate={{
                    required: {value: true, errorMessage: "Please Medical Equipment name"},
                  }} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="code">Code</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.code} 
                                    name="code" placeholder="Code" required/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="specification">Specification</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.specification} 
                                    name="specification" placeholder="Specification" required/>
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

export default AddMedicalEquipment;
