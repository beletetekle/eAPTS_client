import React, {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Api  from '../../../services/api';
import '../../../../node_modules/antd/dist/antd.css';
import {Icon} from 'antd';
import SingleRegion from './Region';
import LoadingSpinner from "../../../containers/common/LoadingSpinner";


class Regions extends Component {
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
    return (
      <div >
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
    </div>
    );
  }
}

export default Regions;
