
require.config({
  baseUrl: "js",
  paths: {
    jquery: 'libs/jquery/dist/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    bootstrap:'libs/bootstrap/dist/js/bootstrap.min',
    text: 'libs/requirejs/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  }

});

require([
  'jquery',
  // Load our app module and pass it to our definition function
  'bootstrap',
  'app'

  
], function($,bootstrap,App){

  App.initialize();
  
});
