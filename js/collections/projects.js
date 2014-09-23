// Filename: collections/projects
define(
  [
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/projects',
  'models/AnotherModel',
  'models/AnotherModel2'
  ], 
  function(_, Backbone, ProjectModel){
  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
},
  function(_, Backbone, AnotherModel, AnotherModel2){
    var AnotherCollection = Backbone.Collection.extend({
      model1: AnotherModel,
      model2: AnotherModel2
    })
    
    return AnotherCollection;
  }
);
