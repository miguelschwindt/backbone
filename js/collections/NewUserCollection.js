// Filename: collections/user
//project clonado para ver como anda
define([
  'underscore',
  'backbone',
  'models/AnotherModel2'
//creo la nueva coleccion de user y le seteo AnotherModel2
], function(_, Backbone, AnotherModel2){
  var UserCollection = Backbone.Collection.extend({
  //le doy la funcionalidad de backbone de colleccion con el extend
    model: AnotherModel2,
  
  setModel: function(model){
  	this.model(model);
  }


  });
  // You don't usually return a collection instantiated
  return UserCollection;
});
