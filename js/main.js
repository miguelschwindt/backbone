//aca en el require me da error como que falta definir algo 
require.config({
  baseUrl: "js",
  paths: {
    jquery: 'libs/jquery/dist/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    text: 'libs/requirejs/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'backbone'
    }
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  
  App.initialize();
  
});
