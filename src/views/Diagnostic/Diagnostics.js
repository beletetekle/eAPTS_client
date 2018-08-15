import React, {Component} from 'react';
import {Badge,Modal, ModalHeader, ModalBody,FormGroup ,Label, Input, ModalFooter, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../services/api';
import {Button} from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleDiagnostic from './Diagnostic';
import LoadingSpinner from "../../containers/common/LoadingSpinner";

import { message } from 'antd';


class Diagnostics extends Component {
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
            modal: false,
        }
    this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount(){
      this.featchdata();
  }

  featchdata(){
    Api.find('Diagnostics', null, null)
      .then((response) =>{
          this.setState({Diagnostic:response.data})
      })
      .catch((error) =>{
          console.log(error);
      })
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
    };

  onDelete = (id) => {
    Api.destroy("Diagnostics", id)
      .then((response) => {
          message.success("succesfully deleted!");
          this.featchdata();

      })
      .catch((error) => {
        message.error("Something went wrong!");
        console.log(error);
      });

  }

  onEdit = (id,name,symptom,medicine,discoveredBy,caution) => {
      this.setState({
          id:id,
          name:name,
          symptom: symptom,
          medicine: medicine,
          discoveredBy: discoveredBy,
          caution: caution,
        });
        
      this.toggle();

  }

  onEditSave = (id) => {
      const DiagnosticData = {
        name: this.state.name,
        symptom: this.state.symptom.toString().split(','),
        medicine: this.state.medicine.toString().split(','),
        discoveredBy: this.state.discoveredBy,
        caution: this.state.caution
      }
      Api.update('Diagnostics', this.state.id, DiagnosticData)
        .then((response) => {
            message.success('successfully modified!');
        this.featchdata();
        this.toggle();
        })
        .catch((error) => {
            console.log(error);
            message.error('Oops! Please check your form again.')
        });
      

  }

  render(){
    const DiagnosticList = this.state.Diagnostic;
    const loading=this.state.loading;
    const listDiagnostic = DiagnosticList.map((diagnistic, index) => {
        return(
            <SingleDiagnostic  key={index}
                diagnostic={diagnistic}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                />

        )
    });
    return (
      <div >
       <Card>
          <CardHeader>
                Diagnistic
          </CardHeader>
          <CardBody>
          <Table>
               <thead>
                   <tr>
                       <th scope="col">Diagnostic Name</th>
                       <th scope="col">Symptom</th>
                       <th scope="col">Medicine</th>
                       <th scope="col">DiscoveredBy</th>
                       <th scope="col">Caution</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody>
                   {loading ? <tr>
                   <td><LoadingSpinner/></td>
                   </tr> : listDiagnostic}
               </tbody>
           </Table>
            <Pagination>
              <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
            </Pagination>
          </CardBody>
      </Card>

      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Edit Diagnostic</ModalHeader>
              <ModalBody>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <FormGroup>
                      <Input type="text" onChange={this.onChange} value={this.state.name} 
                        name="name" placeholder="Name" required/>
                    </FormGroup>
                  
                    <FormGroup>
                        <Label htmlFor="discoveredBy">Discovered By</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.discoveredBy} 
                        name="discoveredBy" placeholder="Discovered By" required/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="symptom">Symptoms</Label>
                      <Input type="textarea" onChange={this.onChange} value={this.state.symptom} rows="3"
                        name="symptom" placeholder="Symptoms" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="medicine">Medicens</Label>
                      <Input type="textarea" onChange={this.onChange} value={this.state.medicine} rows="3"
                        name="medicine" placeholder="Medicines" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="caution">Cautions</Label>
                      <Input type="textarea" onChange={this.onChange} value={this.state.caution} rows="3"
                        name="caution" placeholder="Cautions" required/>
                    </FormGroup>
                 
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.onEditSave}>Save</Button>
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
    </div>
    );
  }
}

export default Diagnostics;
