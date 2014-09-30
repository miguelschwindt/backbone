// Filename: views/app.view
define([
  'jquery',
  'underscore',
  'backbone',
  'text!/index.html',
  'views/projects/list',
  'views/users/list'
], function($, _, Backbone, appTemplate, ProjectListView, UserListView){
  var AppView = Backbone.View.extend({
    el: $('#appDiv'),
    initialize: function(){
      console.log('inicializa app.view');
      this.render;
    },
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
    //esto es trabajo del router tengo que ponerlo en show user y eso


  });
  
  return AppView;
});