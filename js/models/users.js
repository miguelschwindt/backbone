// Filename: models/users
//tambien lo clone yo  para ver 
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var UserModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return UserModel;
});