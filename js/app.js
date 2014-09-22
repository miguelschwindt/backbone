// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    console.log('app.initialize');
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
