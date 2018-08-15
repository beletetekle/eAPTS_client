import React from 'react';
import { Card, CardBody, FormGroup, Input, Col, Row} from 'reactstrap';

class CounsellingInfo extends React.Component {


    render () {

        return (
                <Card>
                    <CardBody>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.name} 
                                name="name" placeholder="Name" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.code}
                                 name="code" placeholder="Code" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.dosageForm} 
                                name="dosageForm" placeholder="Dosage Form" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.strength} 
                                name="strength" placeholder="Strength" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.frequency} 
                                name="frequency" placeholder="Frequency" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.durationOfTreatment} 
                                name="durationOfTreatment" placeholder="Duration of Treatment" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.drug.drugInteraction} 
                                name="drugInteraction" placeholder="Drug Interaction" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.drug.drugFoodInteraction} 
                                name="drugFoodInteraction" placeholder="Drug Food Interaction" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.drug.drugDisease} 
                                name="drugDisease" placeholder="Drug Disease" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange} value={this.props.counsellingInformation.drug.environmentInteraction} 
                                name="environmentInteraction" placeholder="Environment Interaction" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.indication} 
                                name="indication" placeholder="Indication" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.contraIndication} 
                                name="contraIndication" placeholder="Duration of Treatment" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.sideEffect} 
                                name="sideEffect" placeholder="Side Effect" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="6">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.adverseEffect} 
                                name="adverseEffect" placeholder="Adverse Effect" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="my-0">
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.precaution} 
                                name="precaution" placeholder="Precauction" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.storageCondition} 
                                name="storageCondition" placeholder="Storage Condition" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.howToAdminister} 
                                name="howToAdminister" placeholder="How To Administer" required/>
                            </FormGroup>
                          </Col>
                          <Col xs="3">
                            <FormGroup>
                                <Input type="text" onChange={this.props.onChange}
                                value={this.props.counsellingInformation.expireDate} 
                                name="expireDate" placeholder="Expire Date" required/>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
        );
    }
}

export default CounsellingInfo;
