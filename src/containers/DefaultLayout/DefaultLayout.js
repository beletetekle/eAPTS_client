import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';

import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import ClientSession from '../../services/client-session';
import Api from '../../services/api';


class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_name: 'default',
      role: ""
    };
    this.getCurrentUserRole();
  }

  getCurrentUserRole(){
    ClientSession.getAuth((err, value) => {
      if(value.internalUser.roles.length === 1)
        Api
          .find('roles', value.internalUser.roles[0].roleId, null)
          .then((response) => {
            this.setState({role: response.data.name});
          })
          .catch((error) => {
            console.log(error);
          })
    })
  }

  render() {
     var   menu_name = this.state.role;

    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            {navigation[menu_name]? <AppSidebarNav navConfig={navigation[menu_name]} {...this.props} />: null}
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
            <Switch>
              {routes.map((route, idx) => {
                  return route.component && (route.role === this.state.role || !route.role) ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />) : (null);
                },
              )}
              <Redirect from="/" to="/home" />
            </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;