// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/app.view',
  'views/projects/list',
  'views/users/list',
  //vistas creadas para desplegar el menu correspondientea cada una
  'views/projects/menu1',
  'views/projects/menu1item2',
  'views/users/menu2',
  'views/users/menu2item2'
], function($, _, Backbone, AppView, ProjectListView, UserListView, ProjectMenuView, SegundoItemP,
            UserMenuView, SegundoItemU){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '':       'appView',
      //no va nada asi carga de una la view
      'projects': 'showProjects',
      'menu1Item1': 'showProjectsMenu',
      'menu1Item2': 'showProjectsMenu2',
      'users': 'showUsers',
      'menu2Item1': 'showUsersMenu',
      'menu2Item2': 'showUsersMenu2',

      // Default
      '*actions': 'defaultAction'
    },
//con el router lo que hago es "guiarlo" por donde se tiene que ejecutar, es decir 
//en el caso de los menues o sus items llama al constructor aca y los crea en las vistas
//correspondientes  
    appView: function(){//todavia no pasa por aca
      console.log('router.appView');
      this.setUp();

//llamo a setUp
    },
    setUp: function(){
      if (!this.ppalView) {
        this.ppalView = new AppView;
      };
    },

    showProjects: function(){
      //cargo projects
      this.setUp();//tengo que cargarlo siempre antes de cualquier cosa
      console.log('paso por aca en el router');
      //var projectListView = new ProjectListView();
      
      if (this.actualView) {
        this.actualView.hideView();//si esta abierta en la vista actual la cierro (?)
      };
      this.actualView = new ProjectListView;// y si no hay nada creado en la vista lo crea
      
    },
    showProjectsMenu: function(){
      //cargo el menu de project1
      this.setUp();
      var projectMenu = new ProjectMenuView;
    },
    showProjectsMenu2: function(){
      //cargo el menu de project2'
      this.setUp();
      var segundoItem = new SegundoItemP;
    },
    showUsers: function(){
      //muestra user
      this.setUp();
      if (this.actualView) {
        this.actualView.hideView();
      };
      this.actualView = new UserListView;
      
    },
    showUsersMenu: function(){
      //cargo el menu de user1
      var usersMenu = new UserMenuView;
      this.setUp();
    },
    showUsersMenu2: function(){
      //cargo el menu de user2
      var segundoItemU = new SegundoItemU;
      this.setUp();
    }    

  });

  var initialize = function(){
    //router.initialize
    var appRouter = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
