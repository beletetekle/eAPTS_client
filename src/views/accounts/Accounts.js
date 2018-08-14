import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountsList from './AccountsList'
import Api from '../../services/api'

class Accounts extends Component {
  constructor(props){
    super(props);
    this.state = {
      accounts: [],
    }
  }
  
  onDelete = (id) => {

  }

  componentDidMount() {
    Api.find('InternalUsers/myReferrals')
      .then( response => {
        this.setState({accounts: response.data? response.data.users: []})
      }).catch( error => console.log(error));
  }

  render(){

    return (
       <AccountsList accounts={this.state.accounts} onClick={this.onDelete}/>
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
