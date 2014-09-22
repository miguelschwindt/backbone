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
      'users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    },

    appView: function(){
      console.log('router.appView');
      var projectListView = new ProjectListView();
    },


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
