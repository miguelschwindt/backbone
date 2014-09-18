define(function(){

	return{
	 	v1='var1',
		v2='var2',
		v3='var3',
	 	set=function(v1, v2, v3){
			this.v1=v1;
			this.v2=v2;
			this.v3=v3;
		}
	 	getv1=function(){
			return v1;
		}
	 	getv2=function(){
			return v2;
		}
	 	getv3=function(){
			return v3;
		}
	}
});
