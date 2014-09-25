// Filename: collections/projects
define(
  [
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/AnotherModel'
  ], 
//cero la collection y le agrego el modelo nuevo, solo puedo agregarle de a un modelo por coleccion

  function(_, Backbone, AnotherModel){
    var ProjectsCollection = Backbone.Collection.extend({
      
      model: AnotherModel
     
    })
    
    return ProjectsCollection;
  }
);
