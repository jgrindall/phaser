app.State = function(body){
	this.body = body;
};

app.State.prototype.setState = function(s){
	this.state = s;
};

app.State.prototype.matches = function(char){
	return (this.state && this.state.indexOf(char) >= 0);
};

app.State.prototype.isLeft = function(){
	return this.matches("L");
};

app.State.prototype.isRight = function(){
	return this.matches("R");
};

app.State.prototype.isUp = function(){
	return this.matches("U");
};

app.State.prototype.remove = function(char){
	if(this.state){
		this.state = this.state.replace(char, "");
	}
};

app.State.prototype.isStill = function(){
	var v = this.body.velocity;
	var speed = this.body.speed;
	var still = (speed <= app.State.STILL_MAX_SPEED && Math.abs(v.x) <= app.State.STILL_MAX_VX && this.body.blocked.down);
	return still;
}

app.State.STILL_MAX_SPEED = 16;
app.State.STILL_MAX_VX = 0.1;
