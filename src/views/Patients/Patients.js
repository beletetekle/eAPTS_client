import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import Patient from './Patient';
import AddPatientForm from './AddPatientForm'
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class Patients extends Component{

    constructor(props){
        super(props);
         this.state={
            name:"",
            description: "",
            Patients:[],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('Patients',null,null)
        .then((response) =>{
            this.setState({Patients:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onAddPatientForm=() =>{
        this.props.history.push('/Patients/add');
    }

    render(){
        const PatientsList=this.state.Patients;
        const loading=this.state.loading;
        const listPatients = PatientsList.map((patient, index) => {
            return(
                <Patient  key={index}
                    id={patient.id}
                    first_name={patient.first_name}
                    last_name={patient.last_name}
                    woreda={patient.woreda}
                    kebele={patient.kebele}
                    city={patient.city}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Icon onClick={this.onAddPatientForm} type="plus-circle-o" style={{fontSize: 36,float:"right"}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Patients List
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Patient Name</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Middle Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Woreda</th>
                                                <th scope="col">Kebele</th>
                                                <th scope="col">City</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : listPatients}
                                        </tbody>
                                    </Table>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
               
        </div>
        )
    }
}
export default Patients;
