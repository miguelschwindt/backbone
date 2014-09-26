//probando clonar project en user 
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!/templates/users/list.html',
  'models/AnotherModel2',
  'models/users'

], function($, _, Backbone, UsersCollection, usersListTemplate,
            SegundoModelo, UsersModels){
  
  var UserListView = Backbone.View.extend({
    
    el: $("#container"),
    
    initialize: function(){
      
      this.listenTo(this.SegundoModelo, 'change', this.render());
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
    setName:function(name){
      this.SegundoModelo.set('name',"n");
    },
    getName:function(){
      return this.SegundoModelo.get('name');
    },
    render: function(){
      return this;
    }
  });

  var userListView = new UserListView({model: SegundoModelo});
      userListView.remove(); 
  return UserListView;

});
