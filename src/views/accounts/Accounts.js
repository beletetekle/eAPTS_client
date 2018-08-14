import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountsList from './AccountsList'
import Api from '../../services/api'
import { message } from 'antd';
class Accounts extends Component {
  constructor(props){
    super(props);
    this.state = {
      accounts: [],
    }
  }
  
  onDelete = (id) => {
    var component = this;
        Api
          .destroy('InternalUsers', id)
          .then(function(response) {
            message.success('User Succesfully deleted!');
            component.getUsersList();
          })
          .catch(function(error) {
              console.log(error);
              message.error('Oops! delete failed!');
              component.getUsersList();
          });
  }

  getUsersList = () => {
    Api.find('InternalUsers/myReferrals')
      .then( response => {
        this.setState({accounts: response.data? response.data.users: []})
      }).catch( error => console.log(error));
  }

  componentDidMount() {
    this.getUsersList();
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
