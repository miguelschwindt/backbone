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
//y cuando entro poner esta otra
//$(divDeUser).style.visibility=visible;
    render: function(){
      var data = {};
      var compiledTemplate = _.template( appTemplate, data );
      this.$el.append( compiledTemplate );
    }
  });
  return AppView;
});