var Vector2FuncPrototypalFactory = function(x, y){
	var obj = Object.create(Vector2FuncPrototypalFactory.prototype);
	obj.x = x;
	obj.y = y;
	return obj;
};


Vector2FuncPrototypalFactory.prototype.length2 = function(){
	return this.x*this.x + this.y*this.y;
};
Vector2FuncPrototypalFactory.prototype.length = function(){
	return Math.sqrt(this.length2());
};
Vector2FuncPrototypalFactory.prototype.subtract = function(vec){
	var x = this.x - vec.x;
	var y = this.y - vec.y;
	return Vector2FuncPrototypalFactory(x, y);
};