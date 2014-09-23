// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list',
  'views/users/list',
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

    appView: function(){
      console.log('router.appView');
      
    },

    showProjects: function(){
      console.log('paso por projects');
      var projectListView = new ProjectListView();
    },
    showProjectsMenu: function(){
      console.log('cargo el menu de project1');
      var projectMenu = new ProjectMenuView;

    },
    showProjectsMenu2: function(){
      console.log('cargo el menu de project2');
      var segundoItem = new SegundoItemP;

    },
    showUsers: function(){
      console.log('soy user');
      var userListView = new UserListView;
    },

    showUsersMenu: function(){
      console.log('cargo el menu de user1');
      var usersMenu = new UserMenuView;
    },
    showUsersMenu2: function(){
      console.log('cargo el menu de user2');
      var segundoItemU = new SegundoItemU;
    }    

  });

  var initialize = function(){
    console.log('router.initialize');
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
