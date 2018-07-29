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
      name : "Test2",
      icon : 'icon-plus',
      url : '/test',
    }
  ]
}

const navigation = {'default': SampleSideNav };

export default navigation;
