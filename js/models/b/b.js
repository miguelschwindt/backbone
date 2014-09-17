define(['a'],function(a){
	return {
		name : '',
		quotes : [], 
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
