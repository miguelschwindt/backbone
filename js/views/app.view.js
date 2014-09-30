// Filename: views/app.view
define([
  'jquery',
  'underscore',
  'backbone',
  'text!/index.html',
  'views/projects/list',
  'views/users/list',
  'views/projects/menu1',
  'views/projects/menu1item2',
  'views/users/menu2',
  'views/users/menu2item2'
], function($, _, Backbone, appTemplate, ProjectListView, UserListView,ProjectMenuView, SegundoItemP,
            UserMenuView, SegundoItemU){
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
     showProjectsMenu: function(){
      //cargo el menu de project1
   
      var projectMenu = new ProjectMenuView;
    },
    showProjectsMenu2: function(){
      //cargo el menu de project2'
  
      var segundoItem = new SegundoItemP;
    },
    showUsersMenu: function(){
      //cargo el menu de user1

      var usersMenu = new UserMenuView;
      
    },
    showUsersMenu2: function(){
      //cargo el menu de user2
      var segundoItemU = new SegundoItemU;
      
    }  

  });
  
  return AppView;
});