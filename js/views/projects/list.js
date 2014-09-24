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
    
    initialize: function(){
      console.log('view.list');
    //  var compiledTemplate = _.template( projectsListTemplate, { name: "Ginger Kid"} );
      this.$el.html('<h1>Projects</h1>');
      this.projectsModels= new ProjectsModels; 
      this.projectsModels.set('propiedad1', "hola");
      //console.log(this.projectsModels.get('propiedad1'));
      this.projectsModels.set('propiedad2', "hola");
      //console.log(this.projectsModels.get('propiedad2'));
      this.render();    
      },
    render: function(){
        var data =  [
                      PrimerModelo,
                      SegundoModelo
                          ];

      this.projectsCollection = new ProjectsCollection();
      this.projectsCollection.add(data);
      var template = '<% _.each(this.projectsModels,function(model) { %><%= model.get("propiedad2") %><% }); %>';
      var compiledTemplate = _.template(template);
      console.log(this.projectsCollection.models);

      this.$el.html(compiledTemplate(this.projectsModels));

       //this.projectsCollection.models));
      //_.each(this.projectsCollection.models,function(model) { 
        //   model.get("name");
          // console.log(model.get("name"));
         //});

         //{ projects: this.projectsCollection.models } );
     // this.$el.append(this.projectsCollection.model1.name);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  
  return ProjectListView;

});