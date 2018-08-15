import React, { Component } from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';
import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import User from '../../services/users.service';
import maleDefaultImage from '../../assets/img/male.png';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
      super(props);
      this.state = {
          image : null,
          role: null,
          sex:""
      }
  }
  
      onLogoutHandle=()=>{
          User.logout();
          window.location = "#/";
      };
  render(){
  return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: null, width: 100, height: 25, alt: 'eAPTS' }}
          minimized={{ src: null, width: 25, height: 25, alt: 'eAPTS'}}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink href="#/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/accounts">Accounts</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">Customers</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/bincard">Cards</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">Reports</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">Customer Support</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/dashboard">User Management</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#/">More...</NavLink>
            </NavItem>
          </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={maleDefaultImage} className="img-avatar"/>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem onClick={this.onLogoutHandle}><i className="fa fa-lock"/>
                  Log Out
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <AppAsideToggler/>
        </Nav>
       </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
