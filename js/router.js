// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list',
  'views/users/list',
  //vistas creadas para desplegar el menu correspondientea cada una
  'views/projects/menu1',
  'views/projects/menu1item2',
  'views/users/menu2',
  'views/users/menu2item2'
], function($, _, Backbone, ProjectListView, UserListView, ProjectMenuView, SegundoItemP,
            UserMenuView, SegundoItemU){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '':       'appView',
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
    appView: function(){
      console.log('router.appView');
      
    },

    showProjects: function(){
      //cargo projects
      var projectListView = new ProjectListView();
    },
    showProjectsMenu: function(){
      //cargo el menu de project1
      var projectMenu = new ProjectMenuView;

    },
    showProjectsMenu2: function(){
      //cargo el menu de project2'
      var segundoItem = new SegundoItemP;

    },
    showUsers: function(){
      //muestra user
      var userListView = new UserListView;
    },

    showUsersMenu: function(){
      //cargo el menu de user1
      var usersMenu = new UserMenuView;
    },
    showUsersMenu2: function(){
      //cargo el menu de user2
      var segundoItemU = new SegundoItemU;
    }    

  });

  var initialize = function(){
    //router.initialize
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
