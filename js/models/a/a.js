
define(function(){

	return{
	 	v1 : ['variable'],
		v2 : 20,
		v3 : {},
		json : {"e1" : "elemento1",
				"e2" : 125,
				"e3" : [{"k1" : "par1"},
						{"k2" : "par2"},	
						{"k3" : "par3"},
						{"k4" : "par4"},
						{"k5" : "par5"}
						] },
	 	setV1 : function(v1){
			this.v1.push(v1);
		},
		setV2 : function(v2){
			this.v2=v2;
		},
		setV3 : function(v3){
			this.v3=v3;
		},
	 	getV1 : function(){
			return this.v1;
		}, 
	 	getV2 : function(){
			return this.v2;
		},
	 	getV3 : function(){
			return this.v3;
		},
		getJson : function(){
			return this.json;
		},
		getAjaxJson : function(){
			data='q=html5';
			url ='http://tweetproxy.ap01.aws.af.cm/search?'
			$.ajax({
  					url: url+data,
					
					type: 'GET',
					dataType: 'jsonp',
					success: function(datos){
						console.log(datos);
					},
					error: function(datos){
						console.log(datos);
					},
					complete: function(datos){
						return datos;
					}
					
					});
		}
	}
});
