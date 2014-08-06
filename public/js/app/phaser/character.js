
define(function(require, exports){
	
	var ObjectState = require('app/phaser/objectstate');
	
	var Character = function(game){
		this.game = game;
	};
	
	Character.FORCE_DELAY = 425;
	
	Character.prototype.preload = function(){
	
	};

	Character.prototype.create = function () {
		this.makeSprite();
	    this.state = new ObjectState(this.sprite.body);
	};

	Character.prototype.isStill = function() {
		return this.state.isStill();
	};

	Character.prototype.makeSprite = function() {
	
	};

	Character.prototype.setForce = function(s) {
		var _this = this;
		this.state.setState(s);
		setTimeout(function(){
			_this.state.setState(null);
		}, Character.FORCE_DELAY);
	};

	Character.prototype.update = function() {
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

	return Character;
	
});
	

