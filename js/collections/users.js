// Filename: collections/user
//project clonado para ver como anda
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/users'

], function(_, Backbone, UserModel){
  var UserCollection = Backbone.Collection.extend({
    model: UserModel
  });
  // You don't usually return a collection instantiated
  return UserCollection;
});
