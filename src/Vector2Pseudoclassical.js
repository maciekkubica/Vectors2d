var Vector2 = function(x, y){
	this.x = x;
	this.y = y;
};

Vector2.prototype.length2 = function(){
	return this.x*this.x + this.y*this.y;
};

Vector2.prototype.length = function(){
	return Math.sqrt(this.length2());
};

Vector2.prototype.subtract = function(vec){
	var x = this.x - vec.x;
	var y = this.y - vec.y;
	return new Vector2(x,y);
};