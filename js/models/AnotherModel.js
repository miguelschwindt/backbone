// Filename: models/AnotherModel
//creo un nuevo modelo para utilizarlo en projectscollection
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel = Backbone.Model.extend({
    defaults: {
      name: "Primer modelo",//se crea en defaults siempre
    }
  });
  // Return the model for the module
  return AnotherModel;
})