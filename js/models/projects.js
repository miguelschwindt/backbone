// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter",
      propiedad1: "prop1",
      propiedad2: "prop2"
    }
  });
  // Return the model for the module
  return ProjectModel;
});
