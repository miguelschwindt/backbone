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
    
    el: $("#userDiv"),
    template: _.template(usersListTemplate),
    events:  {
      'click button#addUser': 'addUser',
    },

    initialize: function(){
      _.bindAll(this,'render','addUser','hideView');
      this.segundoModelo = new SegundoModelo;
      this.usersModels= new UsersModels; 
      this.userCollection =  new UserCollection;
      this.userCollection.add(this.segundoModelo);
      console.log('view.list');
      this.$el.html('<h1>User</h1>');
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
      //si ponia directamente this.render en listenTo no renderisaba
      console.log('pasa por la funcion');
      this.render();
    },
  
    
    addUser: function(){
      this.nuevoModelo= new SegundoModelo;
      if (this.userCollection.length<10) {
        console.log(this.userCollection.length);
        this.userCollection.add(this.nuevoModelo);
        this.nuevoModelo.setId($('#inputId').val());
        this.nuevoModelo.setName($('#inputName').val());
        this.nuevoModelo.setAge($('#inputAge').val());
        this.nuevoModelo.setCity($('#inputCity').val());
        this.render();
        //resetea una coleccion completa y yo lo que quiero es agregar un modelo ahora
      };
//tengo que arreglar la funcion setModel de NewUserCollection par que dispare 
//el evento del listenTo

    },
    hideView: function(){
      this.$el.css('display','none');
    }
  });

  
  return UserListView;

});
