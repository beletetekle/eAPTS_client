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

const Regions = Loadable({
  loader: () => import('./views/address/regions/Regions'),
  loading: Loading,
});

const AddRegion = Loadable({
  loader: () => import('./views/address/regions/AddRegion'),
  loading: Loading,
});

const Zones = Loadable({
  loader: () => import('./views/address/zones/Zones'),
  loading: Loading,
});

const AddZone = Loadable({
  loader: () => import('./views/address/zones/AddZone'),
  loading: Loading,
});

const Woredas = Loadable({
  loader: () => import('./views/address/woredas/Woredas'),
  loading: Loading,
});

const AddWoreda = Loadable({
  loader: () => import('./views/address/woredas/AddWoreda'),
  loading: Loading,
});

const HealthInstitutes = Loadable({
  loader: () => import('./views/address/healthInstitutes/HealthInstitutes'),
  loading: Loading,
});

const AddHealthInstitute = Loadable({
  loader: () => import('./views/address/healthInstitutes/AddHealthInstitute'),
  loading: Loading,
});

const HealthInstituteCategories = Loadable({
  loader: () => import('./views/address/healthInstitutes/HealthInstituteCategories'),
  loading: Loading,
});

const AddHealthInstituteCategory = Loadable({
  loader: () => import('./views/address/healthInstitutes/AddHealthInstituteCategory'),
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

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  { path: '/regions', exact: true, name: 'Regions', component: Regions},
  { path: '/regions/list', name: 'Regions', component: Regions},
  { path: '/regions/add', name: 'Add Region', component: AddRegion},
  { path: '/zones', exact: true, name: 'Zones', component: Zones},
  { path: '/zones/list', name: 'Zones', component: Zones},
  { path: '/zones/add', name: 'Add Zone', component: AddZone},
  { path: '/woredas', exact: true, name: 'Woredas', component: Woredas},
  { path: '/woredas/list', name: 'Woredas', component: Woredas},
  { path: '/woredas/add', name: 'Add Woreda', component: AddWoreda},
  { path: '/health-institutes', exact: true, name: 'Health Institutes', component: HealthInstitutes},
  { path: '/health-institutes/list', name: 'Health Institutes', component: HealthInstitutes},
  { path: '/health-institutes/add', name: 'Add Health Institute', component: AddHealthInstitute},
  { path: '/health-institutes/categories', exact: true, name: 'Health Institute Categories', component: HealthInstituteCategories},
  { path: '/health-institutes/categories/list', name: 'Health Institute Categories', component: HealthInstituteCategories},
  { path: '/health-institutes/categories/add', name: 'Add Health Institute Category', component: AddHealthInstituteCategory},
  { path: '/accounts', exact: true, name: 'Accounts', component: Accounts},
]
export default routes;