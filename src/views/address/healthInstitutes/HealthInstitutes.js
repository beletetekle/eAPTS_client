import React, {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class HealthInstitutes extends Component {
  render(){
    return (
    
      <div >
       <Card>
              <CardHeader>
                Health Institutes
              </CardHeader>
              <CardBody>
                <Table responsive bordered striped>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Region</th>
                    <th>Zone</th>
                    <th>Woreda</th>
                    <th>Admin</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Health Institute 1</td>
                    <td>This is a description for Health Institute 1</td>
                    <td>Region 1</td>
                    <td>Zone 1</td>
                    <td>Woreda 1</td>
                    <td>root</td>
                  </tr>
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

export default HealthInstitutes;
