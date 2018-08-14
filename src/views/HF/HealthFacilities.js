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

    onAddBinForm=() =>{
        this.props.history.push('/HF/new');
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
                        <div className="float-right">
                            <Icon onClick={this.onAddBinForm} type="plus-circle-o" style={{fontSize: 36,float:"right"}} />
                        </div>
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
                </Row>
        </div>
        )
    }
}
export default HealthFacilities;
