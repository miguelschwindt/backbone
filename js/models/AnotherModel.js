// Filename: models/AnotherModel
//creo un nuevo modelo para utilizarlo en projectscollection
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel = Backbone.Model.extend({
    defaults: {
      id: 1,
      name: "Primer modelo",//se crea en defaults siempre
      age: 00,
      city: 'testing'
    }
  });
  // Return the model for the module
  return AnotherModel;
})