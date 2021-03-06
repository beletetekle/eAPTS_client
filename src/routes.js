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

const Departments = Loadable({
  loader: () => import('./views/address/departments/Departments'),
  loading: Loading,
});

const AddDepartment = Loadable({
  loader: () => import('./views/address/departments/AddDepartment'),
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

const BinCard = Loadable({
  loader:() =>import('./views/card/BinCard'),
  loading:Loading
})

const NewBinCard = Loadable({
  loader:() =>import('./views/card/NewBin'),
  loading:Loading
})
const HealthFacility = Loadable({
  loader: () =>
    import ('./views/HF/HealthFacilities'),
  loading: Loading
})

const AddHF = Loadable({
  loader: () =>
    import ('./views/HF/AddHF'),
  loading: Loading
})

const ImporterAndSupplier = Loadable({
  loader: () =>
    import ('./views/ImporterAndSupplier/ImporterAndSupplieres'),
  loading: Loading
})

const Patients = Loadable({
  loader: () =>
    import ('./views/Patients/Patients'),
  loading: Loading
})

const AddPatient=Loadable({
  loader:() =>import('./views/Patients/AddPatientForm'),
  loading:Loading
})

const PatientType = Loadable({
  loader: () => import('./views/paitentType/PatientTypes'),
  loading: Loading,
});

const AddPatientType = Loadable({
  loader: () => import('./views/paitentType/AddPatientType'),
  loading: Loading,
});

const Diagnostic = Loadable({
  loader: () =>
    import ('./views/Diagnostic/Diagnostics'),
  loading: Loading,
});

const AddDiagnostic = Loadable({
  loader: () =>
    import ('./views/Diagnostic/AddDiagnostic'),
  loading: Loading,
});

const MedicalEquipment = Loadable({
  loader: () =>
    import ('./views/MedicalEquipment/MedicalEquipments'),
  loading: Loading,
});

const AddMedicalEquipment = Loadable({
  loader: () =>
    import ('./views/MedicalEquipment/AddMedicalEquipment'),
  loading: Loading,
});

const DTP = Loadable({
  loader: () =>
    import ('./views/DTPs/DTPs'),
  loading: Loading,
});

const AddDTP = Loadable({
  loader: () =>
    import ('./views/DTPs/AddDTPs'),
  loading: Loading,
});
const Register = Loadable({
  loader: () =>
    import ('./views/user/Register'),
  loading: Loading
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

//No role means route can be accessed by anyone with any role
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  
  { path: '/accounts', exact: true, name: 'Accounts', component: Accounts},
  { path: '/register', exact: true, name: 'Register', component: Register},

  { path: '/regions', exact: true, name: 'Regions', component: Regions, role:"super-admin"},

  { path: '/regions/list', name: 'Regions', component: Regions, role:"super-admin"},
  { path: '/regions/list', name: 'Regions', component: Regions, role:"region-admin"},
  
  { path: '/regions/add', name: 'Add Region', component: AddRegion, role:"super-admin"},
  { path: '/regions/add', name: 'Add Region', component: AddRegion, role:"region-admin"},
  
  { path: '/zones', exact: true, name: 'Zones', component: Zones, role:"super-admin"},
  { path: '/zones', exact: true, name: 'Zones', component: Zones, role:"region-admin"},
  
  { path: '/zones/list', name: 'Zones', component: Zones, role:"super-admin"},
  { path: '/zones/list', name: 'Zones', component: Zones, role:"zone-admin"},
  
  { path: '/zones/add', name: 'Add Zone', component: AddZone, role:"super-admin"},
  { path: '/zones/add', name: 'Add Zone', component: AddZone, role:"zone-admin"},

  { path: '/woredas', exact: true, name: 'Woredas', component: Woredas, role:"super-admin"},
  { path: '/woredas/list', name: 'Woredas', component: Woredas, role:"super-admin"},
  { path: '/woredas/add', name: 'Add Woreda', component: AddWoreda, role:"super-admin"},

  { path: '/woredas', exact: true, name: 'Woredas', component: Woredas, role:"woreda-admin"},
  { path: '/woredas/list', name: 'Woredas', component: Woredas, role:"woreda-admin"},
  { path: '/woredas/add', name: 'Add Woreda', component: AddWoreda, role:"woreda-admin"},

  { path: '/health-institutes', exact: true, name: 'Health Institutes', component: HealthInstitutes, role:"super-admin"},
  { path: '/health-institutes/list', name: 'Health Institutes', component: HealthInstitutes, role:"super-admin"},
  { path: '/health-institutes/add', name: 'Add Health Institute', component: AddHealthInstitute, role:"super-admin"},
  { path: '/health-institutes/categories', exact: true, name: 'Health Institute Categories', component: HealthInstituteCategories, role:"super-admin"},
  { path: '/health-institutes/categories/list', name: 'Health Institute Categories', component: HealthInstituteCategories, role:"super-admin"},
  { path: '/health-institutes/categories/add', name: 'Add Health Institute Category', component: AddHealthInstituteCategory, role:"super-admin"},

  { path: '/health-institutes', exact: true, name: 'Health Institutes', component: HealthInstitutes, role:"health-admin"},
  { path: '/health-institutes/list', name: 'Health Institutes', component: HealthInstitutes, role:"health-admin"},
  { path: '/health-institutes/add', name: 'Add Health Institute', component: AddHealthInstitute, role:"health-admin"},
  { path: '/health-institutes/categories', exact: true, name: 'Health Institute Categories', component: HealthInstituteCategories, role:"health-admin"},
  { path: '/health-institutes/categories/list', name: 'Health Institute Categories', component: HealthInstituteCategories, role:"health-admin"},
  { path: '/health-institutes/categories/add', name: 'Add Health Institute Category', component: AddHealthInstituteCategory, role:"health-admin"},


  { path: '/departments', exact: true, name: 'Departments', component: Departments},
  { path: '/departments/list', name: 'Departments', component: Departments},
  { path: '/departments/add', name: 'Add Department', component: AddDepartment},

  { path : '/medicine',exact:true ,name:'Medicines',component:Medicine},
  { path : '/new-medicine',exact:true ,name:'Medicines',component:AddMedicine},

  { path : '/HF',exact:true ,name:'HealthFacility',component:HealthFacility},
  { path : '/HF/new',exact:true ,name:'Add Health Facility',component:AddHF},
    
  { path : '/Patients',exact:true ,name:'Patients',component:Patients},
  { path : '/Patients/add',exact:true ,name:'New Patient',component:AddPatient},
  { path: '/patient-type', exact: true, name: 'Patient Type', component: PatientType},
  { path: '/patient-type/list', name: 'Patient Type', component: PatientType},
  { path: '/patient-type/add', name: 'Add Patient Type', component: AddPatientType},
  
  { path: '/diagnostic', exact: true, name: 'Diagnostic', component: Diagnostic},
  { path: '/diagnostic/list', name: 'Diagnostic', component: Diagnostic},
  { path: '/diagnostic/add', name: 'Add Diagnostic', component: AddDiagnostic},
  
  { path: '/medical-equipmnet', exact: true, name: 'Medical Equipment', component: MedicalEquipment},
  { path: '/medical-equipmnet/list', name: 'Medical Equipment', component: MedicalEquipment},
  { path: '/medical-equipmnet/add', name: 'Add Medical Equipment', component: AddMedicalEquipment},

  { path: '/dtp', exact: true, name: 'DTP', component: DTP},
  { path: '/dtp/list', name: 'DTP', component: DTP},
  { path: '/dtp/add', name: 'Add DTP', component: AddDTP},

  
  { path : '/bincard',exact:true ,name:'Bin Card',component:BinCard},
  { path : '/bincard/new',exact:true ,name:'New BinCard Item',component: NewBinCard},
  { path : '/ImporterAndSupplier',exact:true ,name:'ImporterAndSupplier',component:ImporterAndSupplier}

]
export default routes;
