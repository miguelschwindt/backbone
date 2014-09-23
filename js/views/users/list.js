//probando clonar project en user 
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!/templates/users/list.html',
  'models/AnotherModel',
  'models/AnotherModel2',
  'models/users'

], function($, _, Backbone, UsersCollection, usersListTemplate, PrimerModelo,
            SegundoModelo, UsersModels){
  
  var UserListView = Backbone.View.extend({
    
    el: $("#container"),
    
    initialize: function(){
      
  
      console.log('view.list');
      var compiledTemplate = _.template( usersListTemplate, {name: "Ginger Kid"});
      this.$el.html('<h1>User</h1>');
      this.usersModels= new UsersModels; 
      this.usersModels.set('propiedad1', "hola");
      console.log(this.usersModels.get('propiedad1'));
      this.usersModels.set('propiedad2', "hola");
      console.log(this.usersModels.get('propiedad2'));
      this.render();
    },
    render: function(){
      this.primerModelo = new PrimerModelo;
      this.primerModelo.get('name');
      this.$el.append(this.primerModelo.get('name'),'   ');
      this.segundoModelo = new SegundoModelo;
      this.segundoModelo.get('name');
      this.$el.append('   ',this.segundoModelo.get('name'));
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  
  return UserListView;

});
