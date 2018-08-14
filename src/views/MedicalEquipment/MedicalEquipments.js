import React, {Component} from 'react';
import {Badge,Modal, ModalHeader, ModalBody,FormGroup ,Label, Input, ModalFooter, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../services/api';
import {Button} from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleMedicalEquipment from './MedicalEquipment';
import LoadingSpinner from "../../containers/common/LoadingSpinner";

import { message } from 'antd';


class MedicalEquipments extends Component {
      constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            code:"",
            specification: "",
            MedicalEquipments: [],
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
    Api.find('MedicalEquipments', null, null)
      .then((response) =>{
          this.setState({MedicalEquipments:response.data})
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
    Api.destroy("MedicalEquipments", id)
      .then((response) => {
          message.success("succesfully deleted!");
          this.featchdata();

      })
      .catch((error) => {
        message.error("Something went wrong!");
        console.log(error);
      });

  }

  onEdit = (id,name,code,specification) => {
      this.setState({
          id:id,
          name:name,
          code:code,
          specification:specification
        });
        
      this.toggle();

  }

  onEditSave = (id) => {
      const MedicalEquipmentData = {
          name: this.state.name,
          code: this.state.code,
          specification: this.state.specification
      }
      Api.update('MedicalEquipments', this.state.id, MedicalEquipmentData)
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
    const MedicalEquipmentList = this.state.MedicalEquipments;
    const loading=this.state.loading;
    const listMedicalEquipment = MedicalEquipmentList.map((medicalEquipment, index) => {
        return(
            <SingleMedicalEquipment  key={index}
                medicalEquipment={medicalEquipment}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                />

        )
    });
    return (
      <div >
       <Card>
          <CardHeader>
                Medical Equipments
          </CardHeader>
          <CardBody>
          <Table>
               <thead>
                   <tr>
                       <th scope="col">Equipment Name</th>
                       <th scope="col">code</th>
                       <th scope="col">Specification</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody>
                   {loading ? <tr>
                   <td><LoadingSpinner/></td>
                   </tr> : listMedicalEquipment}
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
              <ModalHeader toggle={this.toggle}>Edit Medical Equipment</ModalHeader>
              <ModalBody>
                <FormGroup>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.name} 
                        name="name" placeholder="Name" required/>
                    </FormGroup>
                  
                    <FormGroup>
                        <Label htmlFor="code">Code</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.code} 
                        name="code" placeholder="Code" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="specification">Specificatons</Label>
                      <Input type="textarea" onChange={this.onChange} value={this.state.specification} rows="3"
                        name="specification" placeholder="Specifications" required/>
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

export default MedicalEquipments;
