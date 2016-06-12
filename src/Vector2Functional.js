Vector2FuncFactory = function(x,y){
	var obj = {};
	obj.x = x;
	obj.y = y;


	obj.length2 = function(){
		return this.x * this.x + this.y*this.y;
	};
	obj.length = function(){
		return Math.sqrt( this.length2());
	};
	obj.subtract = function(vec){
		var x = this.x-vec.x;
		var y = this.y-vec.y;
		return Vector2FuncFactory(x, y);
	};

	return obj;
};