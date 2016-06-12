NumberedVector2FuncFactory = function(x,y,number){
	var obj = Vector2FuncFactory(x,y);
	obj.number = number;

	obj.increment = function(){
		this.number++;
	};
	obj.decrement = function(){
		this.number--;
	};

	return obj;
};