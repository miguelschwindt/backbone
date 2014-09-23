// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'models/projects',
  'models/AnotherModel',
  'models/AnotherModel2',
  'text!/templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, ProjectsModels, PrimerModelo,
            SegundoModelo, projectsListTemplate){
  
  var ProjectListView = Backbone.View.extend({
    
    el: $("#container"),
    
    initialize: function(){
      console.log('view.list');
      var compiledTemplate = _.template( projectsListTemplate, { name: "Ginger Kid"} );
      this.$el.html('<h1>Projects</h1>');
      this.projectsModels= new ProjectsModels; 
      this.projectsModels.set('propiedad1', "hola");
      console.log(this.projectsModels.get('propiedad1'));
      this.projectsModels.set('propiedad2', "hola");
      console.log(this.projectsModels.get('propiedad2'));
      this.render();    
      },
    render: function(){
      this.primerModelo = new PrimerModelo;
      this.primerModelo.get('name');
      this.$el.append(this.primerModelo.get('name'),'   ');
      this.segundoModelo = new SegundoModelo;
      this.segundoModelo.get('name');
      this.$el.append('   ',this.segundoModelo.get('name'));
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  
  return ProjectListView;

});