import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import SingleImporter from './ImporterAndSupplier';
import AddImporterForm from './AddImporterForm'
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class ImporterAndSupplieres extends Component {

    constructor(props){
        super(props);
         this.state={
            name:"",
            address: "",
            phone: "",
            email: "",
            web: "",
            ImporterAndSupplieres: [],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('Importers', null, null)
        .then((response) =>{
            this.setState({ImporterAndSupplieres:response.data})
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
        const ImporterData = {
            name:this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email,
            web: this.state.web,
        }
        Api.create('Importers', ImporterData, null)
        .then((response) =>{
            this.props.history.push('/ImporterAndSupplier');
            // todo call the alert
        })
        .catch((error) =>{
            console.log(error);
        });

    }

    render(){
        const ImporterList = this.state.ImporterAndSupplieres;
        const loading=this.state.loading;
        const listImporter = ImporterList.map((importer, index) => {
            return(
                <SingleImporter  key={index}
                    id={importer.id}
                    name={importer.name}
                    address={importer.address}
                    phone={importer.phone}
                    email={importer.email}
                    web={importer.web}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
            
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Importer List
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Importer Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Web</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : listImporter}
                                        </tbody>
                                    </Table>
                                </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-plus"/> Add Importer
                    </CardHeader>
                                <CardBody>
                                    < AddImporterForm 
                                        onClick={this.handleSubmit}
                                        onChange={this.onChange}
                                        name={this.state.name}
                                        address={this.state.address}
                                        phone={this.state.phone}
                                        email={this.state.email}
                                        web={this.state.web}/> 
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
               
        </div>
        )
    }
}
export default ImporterAndSupplieres;
