import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

class AddDTP extends Component {

  constructor(props){
    super(props);
     this.state={
       title:"",
       description: "",
       medicine: "",
       DTP: [],
       loading:false
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  };

 
  handleValidSubmit(event, values) {
      const DTPData = {
        title: this.state.title,
        description: this.state.description,
        medicine: this.state.medicine
      }
      
    Api.create('DTPs', DTPData, null)
    .then((response) =>{
        console.log("success");
        this.props.history.push('/dtp');
        
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
                <strong>Add DTPs</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Title</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.title} name="title" 
                  placeholder="Enter DTP title"
                  validate={{
                    required: {value: true, errorMessage: "Please DTP title"},
                  }} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.description} 
                                    name="description" placeholder="Description" required/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="medicine">Medicine</Label>
                  <Input type="text" onChange={this.onChange} value={this.state.medicine} 
                                    name="medicine" placeholder="Medicine" required/>
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

export default AddDTP;
