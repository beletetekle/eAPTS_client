import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import AddHFForm from './AddHFForm'
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class AddHF extends Component{

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
            loading:false
        }
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
    
        return(
                <Col xs="12" md="12">
                                            
                <Card>
                <CardHeader>
                    <i className="fa fa-plus"/> Add Health Facility
                </CardHeader>
                            <CardBody>
                                <AddHFForm 
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
      )
    }
}
export default AddHF;