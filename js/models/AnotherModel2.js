// Filename: models/AnotherModel2
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel2 = Backbone.Model.extend({
  	//le doy la funcionalidad de backbone de colecciones
    defaults: {
      name: "User model",
    }
  });
  // Return the model for the module
  return AnotherModel2;
})