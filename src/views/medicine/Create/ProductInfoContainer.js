import React from 'react';
import { Row } from 'reactstrap';

import ProductInfo from './ProductInfo';


class ProductInfoContainer extends React.Component {


    render () {

        return (
            <Row>
                <ProductInfo
                    title="Medicines"
                    data={this.props.productInformation.medicines}
                    onChange={this.props.onChange}
                    addItem={this.props.addMedicine}
                />
                <ProductInfo
                    title="Reagents"
                    data={this.props.productInformation.reagents}
                    onChange={this.props.onChange}
                    addItem={this.props.addReagents}
                />
                <ProductInfo 
                    title="Supply"
                    data={this.props.productInformation.supply}
                    onChange={this.props.onChange}
                    addItem={this.props.addSupply}
                />
                <ProductInfo
                    title="Consumable Equipment"
                    data={this.props.productInformation.consumableEquipment}
                    onChange={this.props.addConsumableEquipment}
                />
            </Row>
        );
    }
}

export default ProductInfoContainer;
