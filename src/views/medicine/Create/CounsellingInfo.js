import React from 'react';
import { Card, CardBody, FormGroup, Input, Col, Row} from 'reactstrap';

class CounsellingInfo extends React.Component {


    render () {

        return (
                <Card>
                    <CardBody>
                        <FormGroup>
                            <Input type="text" onChange={this.props.onChange} value={this.props.name} 
                            name="name" placeholder="Name of the medicine" required/>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.code} 
                                name="code" placeholder="Code" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.size}
                                 name="strength" placeholder="Srength" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.volume} 
                                name="volume" placeholder="Volume" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.size} 
                                name="size" placeholder="Size" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
        );
    }
}

export default CounsellingInfo;
