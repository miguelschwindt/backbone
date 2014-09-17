// Filename: main.js
require.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
 
  baseUrl: "js",

  paths: {
    jquery: 'libs/bower_components/jquery/dist/jquery',
    modernizr: '/libs/bower_components/modernizr/modernizr',
    underscore: '/libs/bower_components/underscore/underscore',
    backbone: '/libs/bower_components/backbone/backbone',
    bootstrap: 'libs/bower_components/bootstrap/dist/js/bootstrap',
    a: 'model/a',
    b: 'model/b'    
   }   

});
require(['jquery','a'], function($,item){  
  item.setName("RequireJS for loading");
  console.log("Cargo A");
  $('#resultado').html(item.getName()+"<br>");
  
  require(['b'], function(b){
    b.setName("Soy B");
    console.log("Cargo B");
    $('#resultado').append(item.getName());

  });

});