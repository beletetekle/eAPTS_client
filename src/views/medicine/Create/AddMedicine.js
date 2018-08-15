import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NewMedicineForm from './NewMedicieneForm';
import Api  from '../../../services/api';
import { Button } from 'reactstrap';

const medicine_url=""

class AddMedicine extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            code:"",
            strength:"",
            volume:"",
            size:"",
            medicineName: "",
            medicineCode: "",
            medicineDescription: "",
            productInformation: {
                medicines: [

                ],
                reagents: [
                ],
                supply: [
                ],
                consumableEquipment: [
                ]
            },
            councellingInformation: {
                code: '',
                name: '',
                dosageForm: '',
                strength: '',
                frequency: '',
                durationOfTreatment: '',
                indication: '',
                drug: {
                    drugInteraction: '',
                    drugFoodInteraction: '',
                    drugDisease: '',
                    environmentInteraction: '',
                },
                contraIndication: '',
                sideEffect: '',
                adverseEffect: '',
                precaution: '',
                storageCondition: '',
                howToAdminister: '',
                expireDate: '',
            },
            dosage: {
            },
        }
    }
    
    addSupply = () => {
        let productInformation = this.state.productInformation;
        productInformation.supply =  [...this.state.productInformation.supply, {
            name: this.state.name,
            strength: this.state.strength,
            volume: this.state.volume,
            size: this.state.size
            }]
        this.setState({productInformation: productInformation}, () => {console.log(this.state.productInformation.medicines)})
    }
    
    addConsumableEquipment = () => {
        let productInformation = this.state.productInformation;
        productInformation.consumableEquipment =  [...this.state.productInformation.consumableEquipment, {
            name: this.state.name,
            strength: this.state.strength,
            volume: this.state.volume,
            size: this.state.size
            }]
        this.setState({productInformation: productInformation}, () => {console.log(this.state.productInformation.medicines)})
    }
    
    addReagents = () => {
        let productInformation = this.state.productInformation;
        productInformation.reagents =  [...this.state.productInformation.reagents, {
            name: this.state.name,
            strength: this.state.strength,
            volume: this.state.volume,
            size: this.state.size
            }]
        this.setState({productInformation: productInformation}, () => {console.log(this.state.productInformation.medicines)})
    }

    addMedicine = () => {
        let productInformation = this.state.productInformation;
        productInformation.medicines =  [...this.state.productInformation.medicines, {
            name: this.state.name,
            strength: this.state.strength,
            volume: this.state.volume,
            size: this.state.size
            }]
        this.setState({productInformation: productInformation}, () => {console.log(this.state.productInformation.medicines)})
    }
    
    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value }, () => {
            console.log('')
        });
    };

    handleSubmit=() =>{
        const medicineData={
            name:this.state.medicineName,
            code:this.state.medicineCode,
            description: this.state.medicineDescription,
            productInformation: this.state.productInformation,
            councellingInformation: this.state.councellingInformation
        }
        console.log(medicineData);
        Api.create('Medicine/Medicine_create',medicineData,null)
        .then((response) =>{
            this.props.history.push('/home');
            // todo call the alert
        })
        .catch((error) =>{
            console.log(error);
        });

    }
    render(){
        return(
            <div>
                <NewMedicineForm
                    onClick={this.handleSubmit}
                    onChange={this.onChange}
                    name={this.state.name}
                    code={this.state.code}
                    strength={this.state.strength}
                    volume={this.state.volume}
                    size={this.state.size}
                    productInformation={this.state.productInformation}
                    councellingInformation={this.state.councellingInformation}
                    dosage={this.state.dosage}
                    addMedicine={this.addMedicine}
                    addReagents={this.addReagents}
                    addConsumableEquipment={this.addConsumableEquipment}
                    medicineName={this.state.medicineName}
                    medicineCode={this.state.medicineCode}
                    medicineDescription={this.state.medicineDescription}
                />    
            </div>
        )
    }
}

export default AddMedicine;
