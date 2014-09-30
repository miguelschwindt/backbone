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
    
    el: $("#projectDiv"),

    template: _.template( projectsListTemplate),
    
    initialize: function(){
     //CARGO LA VISTA DEL SEGUNDO ITEM';
      this.render();
    },

    render: function(){//compilo el template y le agrego el nuevo item con jquery
      var compiledTemplate = this.template( { name: "Ginger Kid"} );
      this.$el.html('<h3>ITEM 2</h3>');
    }
  });
  return ProjectMenuView;

});