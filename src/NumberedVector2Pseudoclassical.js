var NumberedVector2 = function(x, y, number){
	this = new Vector2(x,y);
	this.number = number;
};

NumberedVector2.prototype = Object.create(Vector2.prototype);
NumberedVector2.prototype.constructor = NumberedVector2;

NumberedVector2.prototype.increment = function(){
	this.number++;
};

NumberedVector2.prototype.decrement = function(){
	this.number--;
};
