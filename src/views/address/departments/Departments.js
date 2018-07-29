import React, {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Departments extends Component {
  render(){
    return (
    
      <div >
       <Card>
              <CardHeader>
                Departments
              </CardHeader>
              <CardBody>
                <Table responsive bordered striped>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Health Institute</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Admin</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Department 1</td>
                    <td>Health Institute 1</td>
                    <td>+2352324234</td>
                    <td>asdfsadf@asdf.com</td>
                    <td>https://example.com</td>
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

export default Departments;
