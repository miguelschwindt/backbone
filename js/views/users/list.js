//probando clonar project en user 
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!/templates/users/list.html',

], function($, _, Backbone, UsersCollection, usersListTemplate){
  
  var UserListView = Backbone.View.extend({
    
    el: $("#container"),
    
    initialize: function(){
      
  
      console.log('view.list');
      var compiledTemplate = _.template( usersListTemplate, {name: "Ginger Kid"});
      this.$el.html('<h1>User</h1>');
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  
  return UserListView;

});
