// Filename: main.js
require.config({
  //urlArgs: "bust=" +  (new Date()).getTime(),
 
  baseUrl: "js",

  paths: {
    jquery: 'libs/jquery/dist/jquery',
    modernizr: 'libs/modernizr/modernizr',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    bootstrap: 'libs/bootstrap/dist/js/bootstrap',
    a: 'models/a/a',
    b: 'models/b/b'    
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