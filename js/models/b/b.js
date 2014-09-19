define(function(){

	return{
	 	v1:'var1',
		v2:'var2',
		v3: [],
	 	setV3 : function(v1){
			this.v1.push(v1);
		},
		setV2 : function(v2){
			this.v2=v2;
		},
		setV1 : function(v3){
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
		getAjaxJson : function(value){
			data='q=html5&p='+value;
			url ='http://tweetproxy.ap01.aws.af.cm/search?'
			$.ajax({
				  	url: url+data,
					type: 'GET',
					dataType: 'jsonp',
					success: function(datos){
							console.log(datos);
							obj=datos.statuses[0];
							if (obj.retweeted) {
								console.log('source: '+obj.source);
							}else{
								console.log('text: '+obj.text);
							};
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
