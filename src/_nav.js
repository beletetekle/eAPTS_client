const superAdmin = {
  items: [
    {
      name: 'Home',
      icon: 'icon-home',
      url: '/home'
    },
    {
      name : "Regions",
      icon : 'icon-list',
      url: '/regions',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/regions/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/regions/add',
        },
      ]
    },
    {
      name : "Zones",
      icon : 'icon-list',
      url: '/zones',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/zones/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/zones/add',
        },
      ]
    },
    {
      name : "Woredas",
      icon : 'icon-list',
      url: '/woredas',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/woredas/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/woredas/add',
        },
      ]
    },
    {
      name : "Health Institutes",
      icon : 'icon-list',
      url: '/health-institutes',
      children: [

        {
          name : "List",
          icon : 'icon-list',
          url : '/health-institutes/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/health-institutes/add',
        },
        {
          name : "Categories",
          icon : 'icon-list',
          url : '/health-institutes/categories',
          children: [
            {
              name : "List",
              icon : 'icon-list',
              url : '/health-institutes/categories/list',
            },
            {
              name : "Add",
              icon : 'icon-plus',
              url : '/health-institutes/categories/add',
            },
          ]
        },

      ]
    },
    {
      name : "Departments",
      icon : 'icon-list',
      url: '/departments',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/departments/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/departments/add',
        },
      ]
    },
    {
      name : "Patient Type",
      icon : 'icon-list',
      url: '/patient-type',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url: '/patient-type/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url: '/patient-type/add',
        },
      ]
    },
    {
      name : "Diagnostic",
      icon : 'icon-list',
      url: '/diagnostic',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url: '/diagnostic/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url: '/diagnostic/add',
        },
      ]
    },
    {
      name : "Medical Equipment",
      icon : 'icon-list',
      url: '/medical-equipmnet',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url: '/medical-equipmnet/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url: '/medical-equipmnet/add',
        },
      ]
    },
    {
      name : "DTP",
      icon : 'icon-list',
      url: '/dtp',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url: '/dtp/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url: '/dtp/add',
        },
      ]
    },
    {
      name : "About",
      icon : 'icon-list',
      url : '/about',
    },
    {
      name : "Test",
      icon : 'icon-note',
      url : '/test',
    },
    {
      name : "Medicine",
      icon : 'icon-plus',
      url : '/medicine',
    },
    
    {
      name: "Health Facility",
      icon: 'fa fa-medkit',
      url: '/HF',
    },
    {
      name: "Importer & Suplier",
      icon: 'fa fa-truck',
      url: '/ImporterAndSupplier',
    },
    {
      name : "Patients",
      icon: 'fa fa-user',
      url : '/Patients',
    },
  ]
}
const regionAdmin = {
  items: [
    {
      name: 'Home',
      icon: 'icon-home',
      url: '/home'
    },
    {
      name : "Regions",
      icon : 'icon-list',
      url: '/regions',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/regions/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/regions/add',
        },
      ]
    }
  ]
}

const zoneAdmin = {
  items: [
    {
      name : "Zones",
      icon : 'icon-list',
      url: '/zones',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/zones/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/zones/add',
        },
      ]
    }
  ]
}

const woredaAdmin = {
  items: [
    {
      name : "Woredas",
      icon : 'icon-list',
      url: '/woredas',
      children: [
        {
          name : "List",
          icon : 'icon-list',
          url : '/woredas/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/woredas/add',
        },
      ]
    }
  ]
}


const HFAdmin = {
  items: [
    {
      name : "Health Institutes",
      icon : 'icon-list',
      url: '/health-institutes',
      children: [

        {
          name : "List",
          icon : 'icon-list',
          url : '/health-institutes/list',
        },
        {
          name : "Add",
          icon : 'icon-plus',
          url : '/health-institutes/add',
        },
        {
          name : "Categories",
          icon : 'icon-list',
          url : '/health-institutes/categories',
          children: [
            {
              name : "List",
              icon : 'icon-list',
              url : '/health-institutes/categories/list',
            },
            {
              name : "Add",
              icon : 'icon-plus',
              url : '/health-institutes/categories/add',
            },
          ]
        }
      ]
    }
  ]
}


const storeAdmin = {
  items: [

  ]
}
const navigation = {'super-admin': superAdmin, 'region-admin': regionAdmin, 'zone-admin': zoneAdmin, 'woreda-admin':woredaAdmin, 'health-admin':HFAdmin, 'store-admin': storeAdmin };


export default navigation;
