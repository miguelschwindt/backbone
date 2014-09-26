//probando clonar project en user 
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/NewUserCollection',
  'text!/templates/users/list.html',
  'models/AnotherModel2',
  'models/users'

], function($, _, Backbone, UserCollection, usersListTemplate,
            SegundoModelo, UsersModels){
  
  var UserListView = Backbone.View.extend({
    
    el: $("#container"),
    template: _.template(usersListTemplate),
    events:  {
      'click button#addUser': 'addUser',
    },

    initialize: function(){
      _.bindAll(this,'render','addUser');
      this.segundoModelo = new SegundoModelo;
      this.usersModels= new UsersModels; 
      this.userCollection =  new UserCollection;
      this.userCollection.add(this.segundoModelo);
      
      console.log('view.list');
      this.$el.html('<h1>User</h1>');
     // this.usersModels= new UsersModels; 
      this.segundoModelo.set('id',123);
      this.segundoModelo.set('name','Jose');
      this.segundoModelo.set('age',12);
      this.segundoModelo.set('city','TX');
      this.listenTo(this.userCollection, 'reset', this.refreshCol);
      this.render();
    },
    render: function(){
      console.log('view.render');
      this.$el.html(this.template(this.userCollection.models));
      return this;
    },

    refreshCol:function(){
      console.log('pasa por la funcion');
      this.render();
    },
  
    
    addUser: function(){
      console.log($('#inputName').val());
      this.segundoModelo.setId($('#inputId').val());
      this.segundoModelo.setName($('#inputName').val());
      this.segundoModelo.setAge($('#inputAge').val());
      this.segundoModelo.setCity($('#inputCity').val());
      this.userCollection.reset(this.segundoModelo);
//tengo que arreglar la funcion setModel de NewUserCollection par que dispare el evento del listenTo

    }
  });

  
  return UserListView;

});
