// Filename: models/AnotherModel2
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AnotherModel2 = Backbone.Model.extend({
  	//le doy la funcionalidad de backbone de colecciones
    defaults: {
      id: 00,
      name: "User model",
      age: 00,
      city: "UK"
    },
    setAge: function(age){
    	this.set('age', age);
    },
    setName:function(name){
      this.set('name',name);
    },
    getName:function(){
      return this.get('name');
    },
    setId:function(id){
      this.set('id',id);
    },
    getId:function(){
      return this.get('id');
    },
    getAge:function(){
      return this.get('age');
    },
    setCity:function(city){
      this.set('city',city);
    },
    getCity:function(){
      return this.get('city');
    }
  });
  // Return the model for the module
  return AnotherModel2;
})