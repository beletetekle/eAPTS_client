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
        return this.addItem('supply');
    }
    
    addConsumableEquipment = () => {
        return this.addItem('consumableEquipment');
    }
    
    addReagents = () => {
        return this.addItem('reagents');
    }

    addMedicine = () => {
        return this.addItem('medicines');
    }

    addItem = (key) => {
        if (this.state.name && this.state.strength && this.state.volume && this.state.size) {
            let productInformation = this.state.productInformation;
            productInformation[key] =  [...this.state.productInformation[key], {
                name: this.state.name,
                strength: this.state.strength,
                volume: this.state.volume,
                size: this.state.size
                }]
            this.setState({productInformation: productInformation},
                          () => {console.log(this.state.productInformation.medicines)})
            this.cleanState();
            return true;
        }
        return false
    }

    cleanState = () => {
        this.setState({
            name: "",
            strength: "",
            volume: "",
            size: ""
        }, () => {let x = ''})
    }
    
    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value }, () => {
            console.log('')
        });
    };

    onCounsellingChange = (event) => {
        const name = event.target.name;
        let councellingInformation = this.state.councellingInformation;
        if (name == 'drugInteraction')
            councellingInformation.drug.drugInteraction = event.target.value;
        else if (name == 'drugFoodInteraction')
            councellingInformation.drug.drugFoodInteraction = event.target.value;
        else if (name == 'drugDisease')
            councellingInformation.drug.drugDisease = event.target.value;
        else if (name == 'environmentInteraction')
            councellingInformation.drug.environmentInteraction = event.target.value;
        else 
            councellingInformation[name] = event.target.value;

        this.setState({councellingInformation: councellingInformation}, () => {console.log(this.state.councellingInformation)})
    }

    handleSubmit=() =>{
        const medicineData={
            name:this.state.medicineName,
            code:this.state.medicineCode,
            description: this.state.medicineDescription,
            productInformation: this.state.productInformation,
            councellingInformation: this.state.councellingInformation
        }
        console.log(medicineData);
        Api.create('Medicines',medicineData,null)
        .then((response) =>{
            this.props.history.push('/medicine');
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
                    addSupply={this.addSupply}
                    medicineName={this.state.medicineName}
                    medicineCode={this.state.medicineCode}
                    medicineDescription={this.state.medicineDescription}
                    onCounsellingChange={this.onCounsellingChange}
                />    
            </div>
        )
    }
}

export default AddMedicine;
