define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'models/projects',
  'text!/index.html'
], function($, _, Backbone, ProjectsCollection, ProjectsModels, projectsListTemplate){
      console.log('antes de initialize');

  var ProjectMenuView = Backbone.View.extend({
    
    el: $("#container"),

    template: _.template( projectsListTemplate),
    
    initialize: function(){
      //CARGO LA VISTA DEL MENU
      this.render();
    },
//compila el template que en este caso es el index donde va a cargar las cosas
    render: function(){
      var compiledTemplate = this.template( { name: "Ginger Kid"} );
      this.$el.html('<h3>ITEM 1</h3>');//agrego un item
      this.$el.append('<h4>Sub ITEM</h4>');//concateno el subitem

    }
  });
  return ProjectMenuView;

});