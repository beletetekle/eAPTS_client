import React from 'react';
import { Row, Col, Card, CardBody, FormGroup, Input } from 'reactstrap';


class BasicMedicineInfo extends React.Component {


    render () {
        return (
            <Row>
              <Col sm="12">
                <Row className="justify-content-center">
                <Col xs="12" >
                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Input type="text" onChange={this.props.onChange} value={this.props.medicineName} 
                                    name="medicineName" placeholder="Name of the medicine" required/>
                                </FormGroup>
                                <FormGroup row className="my-0">
                                  <Col xs="6">
                                    <FormGroup>
                                        <Input type="text" onChange={this.props.onChange} value={this.props.medicineCode} 
                                        name="medicineCode" placeholder="Code" required/>
                                    </FormGroup>
                                    </Col>
                                  <Col xs="6">
                                    <FormGroup>
                                        <Input type="text" onChange={this.props.onChange} value={this.props.medicineDescription} 
                                        name="medicineDescription" placeholder="Description" required/>
                                    </FormGroup>
                                  </Col>
                                </FormGroup>
                            </CardBody>
                        </Card>
                </Col>
              </Row>
              </Col>
            </Row>
        );
    }
}

export default BasicMedicineInfo;
