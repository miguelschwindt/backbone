define([
  'jquery',
  'underscore',
  'backbone',
  'collections/users',
  'models/users',
  'text!/index.html'
], function($, _, Backbone, UsersCollection, UsersModels, UsersListTemplate){
      console.log('antes de initialize');

  var segundoItemU = Backbone.View.extend({
    
    el: $("#userDiv"),

    template: _.template( UsersListTemplate),
    
    initialize: function(){
      console.log('CARGO LA VISTA DEL SEGUNDO ITEM');
      this.render();
    },

    render: function(){
      var compiledTemplate = this.template( { name: "Ginger Kid"} );
      this.$el.html('<h3>ITEM 2</h3>');
      this.$el.append('<h5>Testing Item</h5>');
    }
  });
  return segundoItemU;

});