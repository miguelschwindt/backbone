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
		}
	}
});
