import React from 'react';
import { message } from 'antd';
import { 
    Row, Col, Card, CardBody, CardHeader, Table, 
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ItemForm from './ItemForm';

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: '',
            strength: '',
            volume: '',
            size: ''
        }
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        }, () => {console.log('')});
      }

    addItem = () => {
        let item = this.props.addItem();
        item ? this.toggle():message.error('Invalid Input!') ;
    }

    render () {
        
        console.log(this.props.data, 'medicines');
        return (
            <Col sm="12" md="3">
                <Card>
                    <CardHeader>{this.props.title}</CardHeader>
                    <CardBody>
                        <Table striped>
                        {!this.props.data.length ? "": 
                            <thead>
                                <th>#</th>
                                <th>Name</th>
                                <th>Strength</th>
                                <th>Volume</th>
                                <th>Size</th>
                            </thead>
                        }
                            <tbody>
                            {this.props.data.map((item, index) => {
                                return (<tr key={index}>
                                    <td>{index + 1} </td>
                                    <td>{item.name}</td>
                                    <td>{item.strength}</td>
                                    <td>{item.volume}</td>
                                    <td>{item.size}</td>
                                </tr>);
                            })}
                            </tbody>
                        </Table>
                            {this.props.data.length ? "": <Row>No {this.props.title} added </Row>}
                        <Button onClick={this.toggle} color="info">Add {this.props.title}</Button>
                    </CardBody>
                </Card>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Add {this.props.title}</ModalHeader>
                      <ModalBody>
                        <ItemForm onChange={this.props.onChange} title={this.props.title}
                            name={this.props.name}
                            strength={this.props.strength}
                            volume={this.props.volume}
                            size={this.props.size}
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.addItem}>Add</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
          </Col>
        );
    }
}

export default ProductInfo;
