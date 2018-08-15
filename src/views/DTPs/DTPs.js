import React, {Component} from 'react';
import {Badge,Modal, ModalHeader, ModalBody,FormGroup ,Label, Input, ModalFooter, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../services/api';
import {Button} from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleDTP from './DTP';
import LoadingSpinner from "../../containers/common/LoadingSpinner";

import { message } from 'antd';


class DTPs extends Component {
      constructor(props){
        super(props);
        this.state={
            id:"",
            title:"",
            description: "",
            medicine: "",
            DTPs: [],
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
    Api.find('DTPs', null, null)
      .then((response) =>{
          this.setState({DTPs:response.data})
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
    Api.destroy("DTPs", id)
      .then((response) => {
          message.success("succesfully deleted!");
          this.featchdata();

      })
      .catch((error) => {
        message.error("Something went wrong!");
        console.log(error);
      });

  }

  onEdit = (id, title, description, medicine) => {
      this.setState({
          id:id,
          title:title,
          description: description,
          medicine:medicine
        });
        
      this.toggle();

  }

  onEditSave = (id) => {
      const DTPData = {
          title: this.state.title,
          description: this.state.description,
          medicine: this.state.medicine
      }
      Api.update('DTPs', this.state.id, DTPData)
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
    const DTPList = this.state.DTPs;
    const loading=this.state.loading;
    const listDTP = DTPList.map((dtp, index) => {
        return(
            <SingleDTP  key={index}
                dtp={dtp}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                />

        )
    });
    return (
      <div >
       <Card>
          <CardHeader>
                DTPs
          </CardHeader>
          <CardBody>
          <Table>
               <thead>
                   <tr>
                       <th scope="col">DTP Title</th>
                       <th scope="col">Description</th>
                       <th scope="col">Medicine</th>
                       <th scope="col">Action</th>
                   </tr>
               </thead>
               <tbody>
                   {loading ? <tr>
                   <td><LoadingSpinner/></td>
                   </tr> : listDTP}
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
              <ModalHeader toggle={this.toggle}>Edit DTP</ModalHeader>
              <ModalBody>
                <FormGroup>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.title} 
                        name="title" placeholder="Title" required/>
                    </FormGroup>
                  
                    <FormGroup>
                        <Label htmlFor="descreption">Description</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.description} 
                        name="description" placeholder="Description" required/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="medicine">Medicine</Label>
                      <Input type="text" onChange={this.onChange} value={this.state.medicine} 
                        name="medicine" placeholder="Medicine" required/>
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

export default DTPs;
