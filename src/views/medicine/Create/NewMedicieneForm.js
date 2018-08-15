import React from 'react';
import { Steps, message, Button } from 'antd';
import { Card, CardHeader, CardBody, Input, Col, Container, Row, FormGroup, TabPane, TabContent, Nav, NavItem, NavLink    } from 'reactstrap';
import classnames from 'classnames';
import ProductInfoContainer from './ProductInfoContainer';
import CounsellingInfo from './CounsellingInfo';
import BasicMedicineInfo from './BasicMedicineInfo';

const Step = Steps.Step;

class NewMedicieneForm extends React.Component {
    
     constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '2',
          current: 0,
        };
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render () {
        
        const steps = [{
              title: 'Basic Medicine Information',
              content: <BasicMedicineInfo medicineDescription={this.props.medicineDescription} medicineCode={this.props.medicineCode} medicineName={this.props.medicineName} onChange={this.props.onChange}/>,
            }, {
              title: 'Product Information',
              content: <ProductInfoContainer productInformation={this.props.productInformation} onChange={this.props.onChange} addMedicine={this.props.addMedicine} addReagents={this.props.addReagents} addConsumableEquipment={this.props.addConsumableEquipment} addSupply={this.props.addSupply}/>,
            }, {
              title: 'Counselling Information',
              content: <CounsellingInfo counsellingInformation={this.props.councellingInformation} onChange={this.props.onCounsellingChange}/>,
        }];

        const { current } = this.state;

      
    return (
        <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()} >Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={this.props.onClick}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>

        </div>

    );
    }
};

export default NewMedicieneForm;
