// Filename: views/app.view
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/appTemplate.html'
  'views/projects/newlist'
  'views/users/list'
], function($, _, Backbone, appTemplate, ProjectListView, UserListView){
  var AppView = Backbone.View.extend({
    el: $('#appDiv'),
//$(divDeUser).style.visibility=hidden;
//para que sea dinamico podria poner esta sentencia cuando salgo de la vista user
//pero si uso hidden sigue atenta la seccion, si quiero que no este, usar collapse
//y cuando entro poner esta otra
//$(divDeUser).style.visibility=visible;
    render: function(){
      var data = {};
      var compiledTemplate = _.template( appTemplate, data );
      this.$el.append( compiledTemplate );
    },
    levantarVistaUser:function(){
      this.userListView= new UserListView;
      $('#userDiv').visibility.style=visible;
    },
    levantarVistaProject:function(){
      this.projectListView= new ProjectListView;
      $('#projectDiv').visibility.style=visible;
    },
    esconderVistaUser: function(){
      $('#userDiv').visibility.style=collapse;
    },
    esconderVistaUser: function(){
      $('#projectDiv').visibility.style=collapse;
    }

  });
  
  return AppView;
});