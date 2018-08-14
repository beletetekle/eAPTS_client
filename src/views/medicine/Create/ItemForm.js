import React from 'react';
import { FormGroup, Input, Col, Row } from 'reactstrap';

class ItemForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        }
    }

    render () {
        return (
            <Row>
                <FormGroup>
                    <Input type="text" onChange={this.props.onChange} value={this.props.name} 
                    name="name" placeholder="Name" required/>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="6">
                    <FormGroup>
                        <Input type="text" onChange={this.onChange} value={this.props.code} 
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
            </Row>
        );
    }
}

export default ItemForm;
