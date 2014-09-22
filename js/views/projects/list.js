// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!/templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  
  var ProjectListView = Backbone.View.extend({
    
    el: $("#container"),
    
    initialize: function(){
      console.log('view.list');
      var compiledTemplate = _.template( projectsListTemplate, { name: "Ginger Kid"} );
      this.$el.html('<h1>Projects</h1>');
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  
  return ProjectListView;

});
