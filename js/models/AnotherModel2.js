// Filename: models/AnotherModel2
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel2 = Backbone.Model.extend({
    defaults: {
      name: "Segundo modelo",
    }
  });
  // Return the model for the module
  return AnotherModel2;
})