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


const About = Loadable({
  loader: () => import('./views/about/About'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  { path: '/regions', exact: true, name: 'Regions', component: Regions},
  { path: '/regions/list', name: 'Regions', component: Regions},
  { path: '/regions/add', name: 'Add Region', component: AddRegion},
]
export default routes;