// Filename: models/AnotherModel
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel = Backbone.Model.extend({
    defaults: {
      name: "Primer modelo",
    }
  });
  // Return the model for the module
  return AnotherModel;
})