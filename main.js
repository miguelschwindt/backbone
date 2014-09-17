//aca en el require me da error como que falta definir algo 
require.config({
  paths: {
    jquery: 'home/valentina/tutorialbb/js/libs/jquery/jquery',
    underscore: 'home/valentina/tutorialbb/js/libs/underscore/underscore',
    backbone: 'home/valentina/tutorialbb/js/libs/backbone/backbone'
  }

});

require([

  // Load our app module and pass it to our definition function
  'home/valentina/tutorialbb/app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
  App.listen(8080);
});
