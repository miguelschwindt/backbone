define(['a'],function(a){

	return {
		name : '',
		quotes : [],
		v1='var1',
		v2='var2',
		v3='var3' 
		setName : function(n){
			a.setName("Seteado desde B");
			name = n;
		},
		getName : function(){
			return name;
		},
		setQuotes : function(q){
			this.quotes.push(q);
		},
		Speak : function(){
			return this.quotes;
		}
	}
});
