import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import SingleHF from './HealthFacility';
import AddHFForm from './AddHFForm'
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class HealthFacilities extends Component{

    constructor(props){
        super(props);
         this.state={
            name:"",
            description: "",
            address: "",
            phone: "",
            po_box: "",
            email: "",
            web: "",
            HealthFacilities: [],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('HealthFacilities', null, null)
        .then((response) =>{
            this.setState({HealthFacilities:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value });
    };

    handleSubmit=() =>{
        const HealthFacilityData = {
            name:this.state.name,
            description: this.state.description,
            address: this.state.address,
            phone: this.state.phone,
            po_box: this.state.po_box,
            email: this.state.email,
            web: this.state.web,
        }
        Api.create('HealthFacilities', HealthFacilityData, null)
        .then((response) =>{
            this.props.history.push('/HF');
            // todo call the alert
        })
        .catch((error) =>{
            console.log(error);
        });

    }

    render(){
        const HealthFacilityList = this.state.HealthFacilities;
        const loading=this.state.loading;
        const listHF = HealthFacilityList.map((hf, index) => {
            return(
                <SingleHF  key={index}
                    id={hf.id}
                    name={hf.name}
                    description={hf.description}
                    address={hf.address}
                    phone={hf.phone}
                    po_box={hf.po_box}
                    email={hf.email}
                    web={hf.web}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
            
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Health Facility List
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Health Facility Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">P.O.Box</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Web</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : listHF}
                                        </tbody>
                                    </Table>
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-plus"/> Add Health Facility
                    </CardHeader>
                                <CardBody>
                                    < AddHFForm 
                                        onClick={this.handleSubmit}
                                        onChange={this.onChange}
                                        name={this.state.name}
                                        description={this.state.description}
                                        address={this.state.address}
                                        phone={this.state.phone}
                                        po_box={this.state.po_box}
                                        email={this.state.email}
                                        web={this.state.web}/> 
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" md="12">

                    <CardHeader>
                        <i className="fa fa-user"/> Assign Health Facility Admin
                     </CardHeader>
                    <br />
                        <Row className="justify-content-center">
                            <Col md="10" xs="12" sm="10">
                                <Card>
                                <CardBody>
                                    <Table responsive hover>
                                        <FormGroup row className="my-0">
                                            <Col xs="8">
                                                <FormGroup>
                                                    <Input type="text"
                                                    name="adminEmail" placeholder="Enter Admin Email" required/>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="4">
                                                <FormGroup>
                                                    <Button> Send Email </Button>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                    </Table>
                                </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
               
        </div>
        )
    }
}
export default HealthFacilities;
