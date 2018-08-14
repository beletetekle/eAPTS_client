import React, {Component} from 'react';
import { Alert,Button, Card, CardBody, CardHeader,
     Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../../services/api';
import '../../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleRegion from './Region';
import LoadingSpinner from "../../../containers/common/LoadingSpinner";
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";


class Regions extends Component {
      constructor(props){
        super(props);
        this.state={
            errorMessage : "",
            errVis : false,
            sucMessage : "",
            sucVis : false,
            name:"",
            description: "",
            Regions:[],
            loading:false,
            currentRegion: {},
            currentRegionId:"",
            deleteModalVisible: false,
            editModalVisible: false
        }
    }

    messageSuc = ( message )=>{
        this.setState({sucVis : true, sucMessage : message, errVis : false})
      };

    onDismiss = ()=>{
        this.setState({sucVis : false, errVis : false})
    };

    messageErr =( message )=>{
        this.setState({sucVis : false, errorMessage : message, errVis : true})
    };

    getAllRegion=()=>{
        Api.find('Regions',null,null)
        .then((response) =>{
            this.setState({Regions:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    componentDidMount(){
        this.getAllRegion()
}

  setRegionForDelete = (region) => {
    this.setState({
      currentRegion:region ,
      currentRegionId:region.id, deleteModalVisible: true});
  };
  setRegionForUpdate = (region) => {
    this.setState({
      currentRegion: region,
      currentRegionId:region.id, editModalVisible: true});
  };

  handleModalCancel = () => {
    this.setState({
      deleteModalVisible: false,
       editModalVisible: false});
  };

  deleteRegion = () => {
    // todo call the delete method for the user
    Api.destroy('Regions',this.state.currentRegionId,null)
    .then((response) =>{
        this.messageSuc('Region  Deleted  Successfully !');
         this.setState({deleteModalVisible: false});
         this.getAllRegion();
    })
    .catch((error) =>{
        this.setState({deleteModalVisible: false});
        this.messageErr('Oops! Delete failed!');
    })
  };

  updateRegion = (event,value) => {
    if(value){
    // todo call the delete method for the user

    }else {
      this.setState({editModalVisible: false});
    }
  };

  render(){
    const RegionList=this.state.Regions;
    const loading=this.state.loading;
    const listRegions = RegionList.map((region, index) => {
        return(
            <SingleRegion  key={index}
                id={region.id}
                name={region.name}
                description={region.description}
                OnEdit={() => {this.setRegionForUpdate(region)}}
                onDelete={() => {this.setRegionForDelete(region)}}
            />
        )
    });
    const currentRegion=this.state.currentRegion
    const defaultValues = {
      name:currentRegion.name,
      description:currentRegion.description,
    };
    return (
      <div>
          <Row>
                <Col xs="12" md="12">
                        <Alert color="success" isOpen={this.state.sucVis} toggle={this.onDismiss}>
                        { this.state.sucMessage }
                        </Alert>

                        <Alert color="danger" isOpen={this.state.errVis} toggle={this.onDismiss}>
                        { this.state.errorMessage}
                        </Alert>
                    <Card>
                        <CardHeader>
                            Regions
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope="col">Region Name</th>
                                        <th scope="col">description</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <tr>
                                    <td><LoadingSpinner/></td>
                                    </tr> : listRegions}
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
                </Col>
             </Row>
             <Modal isOpen={this.state.deleteModalVisible} toggle={this.setRegionForDelete} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
                <ModalBody>
                    <p>You are about to delete
                    Region Name <strong className="text-warning">{this.state.currentRegion.name}</strong></p>
                    <p>Deleting Region will erase all its related information. These includes </p>
                    <ul>
                    <li>Region's Name</li>
                    <li>Region's Description</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.deleteRegion}>Delete</Button>{' '}
                    <Button color="secondary" onClick={this.handleModalCancel}>Cancel</Button>
                </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.editModalVisible} toggle={this.setRegionForUpdate} className={this.props.className}>
                <AvForm onValidSubmit={this.updateRegion} model={defaultValues} className="align-justify-content-center">
                    <ModalHeader toggle={this.toggle}>Edit Franchisee </ModalHeader>
                    <ModalBody>
                        <Col xs="12" sm="8">
                        <AvGroup>
                            <AvField name="name" label="Name" required />
                        </AvGroup>
                        </Col>
                        <Col xs="12" sm="8">
                        <AvGroup>
                            <AvField  type="textarea" name="description"  label="Description" rows="9" required />
                        </AvGroup>
                        </Col>

                    </ModalBody>
                    <ModalFooter>
                    <Button color="success">Update</Button>{' '}
                    <Button color="secondary" onClick={this.handleModalCancel}>Cancel</Button>
                    </ModalFooter>
                </AvForm>
                </Modal>
    </div>
    );
  }
}

export default Regions;
