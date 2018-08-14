const SampleSideNav = {
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
    }
  ]
}

const navigation = {'default': SampleSideNav };

export default navigation;
