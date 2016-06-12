var Vector2FuncSharedFactory = function(x,y)
{
	var obj = {};
	obj.x = x;
	obj.y = y;
	expand(Vector2Methods, obj);
	return obj;
};

Vector2Methods = {};
Vector2Methods.length2 = function(){
	return this.x*this.x + this.y*this.y;
};

Vector2Methods.length = function()
{
	return Math.sqrt(this.length2());
};

Vector2Methods.subtract = function(vec){
	var x = this.x - vec.x;
	var y = this.y - vec.y;
	return Vector2FuncSharedFactory(x, y);
};


var expand = function( src, trg){
	for( var key in src ){
		trg[key] = src[key];
	}
};