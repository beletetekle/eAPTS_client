import React, {Component} from 'react';
import { Col, Card, CardBody, CardHeader, FormGroup, Input, Label, Button} from 'reactstrap';
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';

import './react-tag.css';
import {Switch} from 'antd';

import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

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
        loading:false,
        tags: [],
        suggestions: [
          { id: 'Disiness', text: 'Disiness' },
          { id: 'Fever', text: 'Fever' },
          { id: 'Htemp', text: 'High Temprature' },
        ]
    }
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);

  }

  handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }
  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
  };

  onTagChange() {
    var tags = ""
    for (let index = 0; index < this.state.tags.length; index++) {
      tags=tags+""+this.state.tags[index].text+",";
    }
    tags = tags.substring(0, tags.length - 1);
    return tags
  };

  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }
  handleValidSubmit(event, values) {
      var symptom = this.onTagChange();

      const DiagnosticData = {
        name: this.state.name,
        symptom: symptom.split(','),
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
    const { tags, suggestions } = this.state;
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
                  <Label htmlFor="symptom">Symptoms</Label>
                  <ReactTags 
                    inline
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
                  
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="Medicen">Medicens</Label>
                  <Input type="textarea" onChange={this.onChange}value={this.state.medicine} name="medicine" rows="4"
                  placeholder = "Medicens"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="caution">Cautions</Label>
                  <Input type="textarea" name="caution" onChange={this.onChange} id="description" rows="4"
                              placeholder="cautions" value={this.state.caution} 
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
