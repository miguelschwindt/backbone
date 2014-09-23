// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/projects/list',
  'views/users/list'
], function($, _, Backbone, ProjectListView, UserListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '':       'appView',
      'projects': 'showProjects',
      'menu1': 'showProjectsMenu',
      'users': 'showUsers',
      'menu2': 'showUsersMenu',

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
      console.log('cargo el menu de project');
      var projectMenu = new ProjectListView();
    },
    showUsers: function(){
      console.log('soy user');
      var userListView = new UserListView;
    },

    showUsersMenu: function(){
      console.log('cargo el menu de user');
      var usersMenu = new UserListView();
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
