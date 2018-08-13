import React from 'react';
import Loadable from 'react-loadable';
import LoadingDots from './components/LoadingDots';

function Loading() {
    return <LoadingDots interval={300} dots={3} style={{fontSize:48}}/>;
}

const Home = Loadable({
  loader: () => import('./views/home/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./views/about/About'),
  loading: Loading,
});

const Accounts = Loadable({
  loader: () => import('./views/accounts/Accounts'),
  loading: Loading,
});

const Medicine=Loadable({
  loader:() =>import('./views/medicine/Medicines'),
  loading:Loading
})

const AddMedicine=Loadable({
  loader:() =>import('./views/medicine/Create/AddMedicine'),
  loading:Loading
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  { path: '/accounts', exact: true, name: 'Accounts', component: Accounts},
  { path : '/medicine',exact:true ,name:'Medicines',component:Medicine},
  { path : '/new-medicine',exact:true ,name:'Medicines',component:AddMedicine}

]
export default routes;