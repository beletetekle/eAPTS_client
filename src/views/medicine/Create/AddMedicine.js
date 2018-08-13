import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NewMedicineForm from './NewMedicieneForm';
import Api  from '../../../services/api';

const medicine_url=""

class AddMedicine extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            code:"",
            strength:"",
            volume:"",
            size:""
        }
    }
    onChange = (event) => {
        const name = event.target.name;
        this.setState({ [name] : event.target.value });
    };

    handleSubmit=() =>{
        const medicineData={
            name:this.state.name,
            code:this.state.code,
            strength:this.state.strength,
            volume:this.state.volume,
            size:this.state.size
        }
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
                />    
            </div>
        )
    }
}

export default AddMedicine;