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
  'text!/templates/projects/newlist.html'
], function($, _, Backbone, ProjectsCollection, ProjectsModels, PrimerModelo,
            SegundoModelo, projectsListTemplate){
  
  var ProjectListView = Backbone.View.extend({
    
    el: $("#container"),
    template: _.template(projectsListTemplate),
    initialize: function(){
      console.log('view.list');
   
      this.$el.html('<h1>Projects</h1>');
      this.projectsModels= new ProjectsModels; 
      this.projectsModels.set('propiedad1', "hola");
      
      this.projectsModels.set('propiedad2', "hola");
      
      
              var data =  [
                      PrimerModelo,
                      SegundoModelo
                          ];

      this.projectsCollection = new ProjectsCollection();
      this.projectsCollection.add(data);
   

      this.render();    
      },
    render: function(){


      this.$el.html(this.template(this.projectsCollection.models));

    }
  });
 
  
  return ProjectListView;

});