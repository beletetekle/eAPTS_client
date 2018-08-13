import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import Medicine from './Medicine';
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class Medicines extends Component{

    constructor(props){
        super(props);
         this.state={
            Medicines:[],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('Medicines',null,null)
        .then((response) =>{
            this.setState({Medicines:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onAddMedicineForm=() =>{
        this.props.history.push('/new-Medicine');
    }

    render(){
        const MedicineList=this.state.Medicines;
        const loading=this.state.loading;
        const listMedicine=MedicineList.map((medicine,index) =>{
            return(
                <Medicine  key={index}
                    id={medicine.id}
                    name={medicine.name}
                    code={medicine.conde}
                    strength={medicine.strength}
                    size={medicine.size}
                    volume={medicine.volume}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
            <Row type="flex" justify="end">
                <Icon onClick={this.onAddMedicineForm} type="plus-circle-o" style={{fontSize: 36,float:"right"}} />
            </Row>
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Medicines
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Name </th>
                                                <th scope="col"> Code</th>
                                                <th scope="col">strength</th>
                                                <th scope="col">size</th>
                                                <th scope="col">volume</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : listMedicine}
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
export default Medicines;
