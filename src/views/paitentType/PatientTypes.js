import React, {Component} from 'react';
import {Badge,Modal, ModalHeader, ModalBody,FormGroup ,Label, Input, ModalFooter, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../services/api';
import {Button} from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SinglePatientType from './PatientType';
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import '../../../node_modules/antd/dist/antd.css';
import {Switch} from 'antd';

import { message } from 'antd';


class PatientTypes extends Component {
      constructor(props){
        super(props);
        this.state={
            name:"",
            description:"",
            discount:"",
            isFree:"",
            sponsoredBy:"",
            credit:"",
            insurance:"",
            createdById:"",
            PatientType: [],
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
    Api.find('PatientTypes', null, null)
      .then((response) =>{
          this.setState({PatientType:response.data})
      })
      .catch((error) =>{
          console.log(error);
      })
  }

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name] : event.target.value });
    };

    onChecked(checked) {
    const status = `${checked}`;
    this.setState({isFree: status});
    
  }

  onDelete = (id) => {
    Api.destroy("PatientTypes", id)
      .then((response) => {
          message.success("succesfully deleted!");
          this.featchdata();

      })
      .catch((error) => {
        message.error("Something went wrong!");
        console.log(error);
      });

  }

  onEdit = (id, name, description, discount, isFree, sponsoredBy, credit, insurance, createdById) => {
      this.setState({
          id:id,
          name:name,
          description: description,
          discount: discount,
          isFree: isFree,
          sponsoredBy: sponsoredBy,
          credit: credit,
          insurance: insurance,
          createdById: createdById
        });
        
      this.toggle();

  }

  onEditSave = (id) => {
      const PatientTypeData = {
        name: this.state.name,
        description: this.state.description,
        discount: this.state.discount,
        isFree: this.state.PatientType.isFree,
        sponsoredBy: this.state.sponsoredBy,
        credit: this.state.credit,
        insurance: this.state.insurance,
        createdById: this.state.createdById
      }
      Api.update('PatientTypes', this.state.id, PatientTypeData)
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
    const PatientTypeList = this.state.PatientType;
    const loading=this.state.loading;
    const listPatientType = PatientTypeList.map((patientType, index) => {
        return(
            <SinglePatientType  key={index}
                patientType={patientType}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                />

        )
    });
    return (
      <div >
       <Card>
          <CardHeader>
                Patient Type
          </CardHeader>
          <CardBody>
          <Table>
               <thead>
                   <tr>
                       <th scope="col">Patient Name</th>
                       <th scope="col">Description</th>
                       <th scope="col">Discount</th>
                       <th scope="col">Is Free</th>
                       <th scope="col">Sponsored By</th>
                       <th scope="col">Credit</th>
                       <th scope="col">Insurance</th>
                       <th scope="col">Created By</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody>
                   {loading ? <tr>
                   <td><LoadingSpinner/></td>
                   </tr> : listPatientType}
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
              <ModalHeader toggle={this.toggle}>Edit Patient Type</ModalHeader>
              <ModalBody>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <FormGroup>
                      <Input type="text" onChange={this.onChange} value={this.state.name} 
                        name="name" placeholder="Name" required/>
                    </FormGroup>
                  
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.description} 
                        name="description" placeholder="Description" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="discount">Discount</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.discount} 
                        name="discount" placeholder="Discount" required/>
                    </FormGroup>


                    <FormGroup>
                        <Label htmlFor="sponsoredBy">Sponsored By</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.sponsoredBy} 
                        name="sponsoredBy" placeholder="Sponsored By" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="credit">Credit</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.credit} 
                        name="credit" placeholder="Credit" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="insurance">Insurance</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.insurance} 
                        name="insurance" placeholder="Insurance" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="createdById">Created By</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.createdById} 
                        name="createdById" placeholder="Created By" required/>
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

export default PatientTypes;
