define(['modernizr'],function(modernizr){
	return {
		name : '',
		quotes : [], 
		setName : function(n){
			name = n;
			console.log("Seteando Name para App");
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
