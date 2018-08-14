import React,{Component} from 'react';
import {Alert, Card, CardBody, CardHeader, Col, Row, Table,FormGroup,Input,Button} from "reactstrap";
import LoadingSpinner from "../../containers/common/LoadingSpinner";
import Bin from './Bin';
import Api  from '../../services/api';
import '../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';

class BinCard extends Component{

    constructor(props){
        super(props);
         this.state={
            MedicineBins:[],
            loading:false
        }
    }

    componentDidMount(){
        Api.find('MedicineBins',null,null)
        .then((response) =>{
            this.setState({MedicineBins:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onAddBinForm=() =>{
        this.props.history.push('/bincard/new');
    }

    render(){
        const MedicineBinlist = this.state.MedicineBins;
        const loading=this.state.loading;
        const BinCard = MedicineBinlist.map((bin,index) =>{
            return(
                <Bin key={bin.id}
                    id={bin.id}
                    name={bin.name}
                    batchno={bin.batchNo}
                    issued={bin.issued}
                    expdate={bin.expiryDate}
                    />

            )
        });
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                            
                     <Card>
                     <CardHeader>
                        <i className="fa fa-align-justify"/> Bin Card
                        <div className="float-right">
                            <Icon onClick={this.onAddBinForm} type="plus-circle-o" style={{fontSize: 36,float:"right"}} />
                        </div>
                    </CardHeader>
                                <CardBody>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Name </th>
                                                <th scope="col"> Batch Number</th>
                                                <th scope="col">Issued</th>
                                                <th scope="col">Expiry Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? <tr>
                                            <td><LoadingSpinner/></td>
                                            </tr> : BinCard}
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
export default BinCard;
