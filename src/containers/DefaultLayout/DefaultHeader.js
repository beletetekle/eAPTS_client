import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';
import {AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultHeader  = (props) => {

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
              <NavLink href="#/dashboard">Cards</NavLink>
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
              Test
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem><i className="fa fa-lock"/>
                  Test
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
          <AppAsideToggler/>
        </Nav>
       </React.Fragment>
    );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
