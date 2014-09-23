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
      console.log('CARGO LA VISTA DEL MENU');
      this.render();
    },

    render: function(){
      var compiledTemplate = this.template( { name: "Ginger Kid"} );
      
      this.$el.html('<h3>ITEM 1</h3>');
      //$("#container").html('<h3>ITEM 1</h3>');
      //document.getElementById('container').html('<h3>ITEM 1</h3>');

      this.$el.append('<h4>Sub ITEM</h4>');

    }
  });
  return ProjectMenuView;

});