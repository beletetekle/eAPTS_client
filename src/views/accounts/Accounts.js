import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountsList from './AccountsList'

class Accounts extends Component {
  
  onDelete = (id) => {

  }

  render(){

    return (
       <AccountsList accounts={['A', 'B', 'C', 'D']} onClick={this.onDelete}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {
   // actions: bindActionCreators(null, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
