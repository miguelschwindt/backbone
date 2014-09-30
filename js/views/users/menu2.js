define([
  'jquery',
  'underscore',
  'backbone',
  'collections/users',
  'models/users',
  'text!/index.html'
], function($, _, Backbone, UsersCollection, UsersModels, UsersListTemplate){
      console.log('antes de initialize');

  var userMenuView = Backbone.View.extend({
    
    el: $("#userDiv"),

    template: _.template( UsersListTemplate),
    
    initialize: function(){
      console.log('CARGO LA VISTA DEL MENU');
      this.render();
    },

    render: function(){
      var compiledTemplate = this.template( { name: "Ginger Kid"} );
      
      this.$el.html('<h3>ITEM 1</h3>');
      this.$el.append('<h4>Sub ITEM</h4>');

    }
  });
  return userMenuView;

});