app.ForceState = function(){
	
};

app.ForceState.prototype.setState = function(s){
	this.state = s;
};

app.ForceState.prototype.matches = function(char){
	return (this.state && this.state.indexOf(char) >= 0);
};

app.ForceState.prototype.isLeft = function(){
	return this.matches("L");
};

app.ForceState.prototype.isRight = function(){
	return this.matches("R");
};

app.ForceState.prototype.isUp = function(){
	return this.matches("U");
};

app.ForceState.prototype.remove = function(char){
	if(this.state){
		this.state = this.state.replace(char, "");
	}
};

app.Player = function(game){
	this.game = game;
	this.state = new app.ForceState();
};

app.Player.prototype.preload = function(){
	this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
};

app.Player.prototype.create = function () {
    this.sprite = this.game.add.sprite(32, 32, 'dude');
	this.sprite.enableBody = true;
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 20;
	this.sprite.body.velocity.y = -5;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
    this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
	this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

app.Player.prototype.isStill = function() {
	var v = this.sprite.body.velocity;
	var speed = this.sprite.body.speed;
	var still = (speed <= 16 && Math.abs(v.x) <= 0.1 && this.sprite.body.blocked.down);
	return still;
};

app.Player.prototype.setForce = function(s) {
	var _this = this;
	this.state.setState(s);
	setTimeout(function(){
		_this.state.setState(null);
	}, 400);
};

app.Player.prototype.update = function() {
    this.sprite.body.velocity.x = 0;
	var left = (this.state.isLeft() || this.cursors.left.isDown);
	var right = (this.state.isRight() || this.cursors.right.isDown);
	var up = (this.state.isUp() || (this.sprite.body.blocked.down && this.cursors.up.isDown));
    if(left){
		this.sprite.body.velocity.x = -150;
        this.sprite.animations.play('left');
    }
    else if(right){
        this.sprite.body.velocity.x = 150;
        this.sprite.animations.play('right');
    }
    else{
        this.sprite.animations.stop();
        this.sprite.frame = 4;
    }
    if(up){
        this.sprite.body.velocity.y = -400;
		this.state.remove("U");
    }
};