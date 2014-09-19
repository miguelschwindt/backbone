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
require(['jquery','a','b'], function($,a,b){  

  console.log(a.getV1());
  a.setV1('aaa');
  console.log(a.getV1());
  a.setV1(120);
  console.log(a.getV1());
  var obj={
    a1 : ['var1',23],
    a2: ['var2',46]
   }
  a.setV1(obj);
  console.log(a.getV1());
  variable = a.getV1()[3].a2[1];
  console.log(variable);
  if (a.getV2()===20) {
    console.log("Ok.");
  }else{
    console.log('No');
  }
  a.setV2('20');
  if (a.getV2()===20) {
    console.log("Ok.");
  }else{
    console.log('No');
  }
  console.log(a.getJson());
  obj=JSON.stringify(a.getJson());
  console.log(obj);
  console.log(JSON.parse(obj));

//ejercicio ajax
  b.getAjaxJson('aaa');


});
