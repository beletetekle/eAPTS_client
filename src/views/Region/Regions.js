import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import SingleRegion from './Region';
import AddRegionForm from './AddRegionForm'
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class Region extends Component{

    constructor(props){
        super(props);
         this.state={
            name:"",
            description: "",
            Regions:[],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('Regions',null,null)
        .then((response) =>{
            this.setState({Regions:response.data})
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
        const RegionData={
            name:this.state.name,
            description: this.state.description,
        }
        Api.create('Regions',RegionData,null)
        .then((response) =>{
            this.props.history.push('/Region');
            // todo call the alert
        })
        .catch((error) =>{
            console.log(error);
        });

    }

    render(){
        const RegionList=this.state.Regions;
        const loading=this.state.loading;
        const listRegions = RegionList.map((region, index) => {
            return(
                <SingleRegion  key={index}
                    id={region.id}
                    name={region.name}
                    description={region.description}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
            
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Region List
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Region Name</th>
                                                <th scope="col">description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : listRegions}
                                        </tbody>
                                    </Table>
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-plus"/> Add Region
                    </CardHeader>
                                <CardBody>
                                    < AddRegionForm 
                                        onClick={this.handleSubmit}
                                        onChange={this.onChange}
                                        name={this.state.name}
                                        description={this.state.description}/> 
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" md="12">

                    <CardHeader>
                        <i className="fa fa-user"/> Assign Region Admin
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
export default Region;
