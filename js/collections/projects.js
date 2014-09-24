// Filename: collections/projects
define(
  [
  'underscore',
  'backbone',
  // Pull in the Model module from above

  'models/AnotherModel'
  ], 

  function(_, Backbone, AnotherModel){
    var ProjectsCollection = Backbone.Collection.extend({
      
      model: AnotherModel
     
    })
    
    return ProjectsCollection;
  }
);
