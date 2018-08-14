import React, {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../../services/api';
import '../../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleZone from './Zone';
import LoadingSpinner from "../../../containers/common/LoadingSpinner";

class Zones extends Component {
  constructor(props){
    super(props);
    this.state={
        region:"",
        zones:[],
        loading:false
    }
  }

  componentDidMount(){
    Api.find('Zones',null,null)
    .then((response) =>{
        this.setState({zones:response.data})
    })
    .catch((error) =>{
        console.log(error);
    })
}
  render(){
    const ZoneList=this.state.zones;
    const loading=this.state.loading;
    const listZone = ZoneList.map((zone, index) => {
        return(
            <SingleZone  key={index}
                id={ZoneList.id}
                name={zone.name}
                description={zone.description}
                region={zone.region}
                />
        )
    });
    return (
      <div >
       <Card>
              <CardHeader>
                Zones
              </CardHeader>
              <CardBody>
                <Table responsive bordered striped>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Region</th>
                    <th>Admin</th>
                  </tr>
                  </thead>
                  <tbody>
                   {loading ? <tr>
                   <td><LoadingSpinner/></td>
                   </tr> : listZone}
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
      </div>
    );
  }
}

export default Zones;
