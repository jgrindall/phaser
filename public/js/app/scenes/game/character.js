
define(['app/scenes/game/objectstate', 'app/game'], function(ObjectState, Game){
	
	"use strict";
	
	var Character = function(){
		Game.pauseSignal.add(this.pauseChanged, this);
	};
	
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
		var that = this;
		this.state.setState(s);
		setTimeout(function(){
			that.state.setState(null);
		}, Character.FORCE_DELAY);
	};
	
	Character.prototype.pauseChanged = function(){
		var paused = Game.physicsPaused;
		if(paused){
			this.pause();
		}
		else{
			this.unPause();
		}
	};
	
	Character.prototype.pause = function(){
		this.cachedVelocity = {'x':this.sprite.body.velocity.x, 'y':this.sprite.body.velocity.y};
		this.sprite.body.allowGravity = false;
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.sprite.animations.stop();
	};
	
	Character.prototype.unPause = function(){
		this.sprite.body.allowGravity = true;
		this.sprite.body.velocity.x = this.cachedVelocity.x;
		this.sprite.body.velocity.y = this.cachedVelocity.y;
	};
	
	Character.prototype.controlDown = function(data) {
		if(this.state.getState() != null){
			return;
		}
		if(data.index === 0){
			this.setForce(ObjectState.LEFT);
		}
		else if(data.index === 1){
			this.setForce(ObjectState.RIGHT);
		}
		else if(data.index === 2){
			this.setForce(ObjectState.UPLEFT);
		}
		else if(data.index === 3){
			this.setForce(ObjectState.UPRIGHT);
		}
	};
	
	Character.prototype.controlUp = function(data) {
		
	};
	
	Character.prototype.update = function() {
		var left, right;
		if(Game.physicsPaused){
			return;
		}
		this.sprite.body.velocity.x = 0;
		left = this.state.isLeft();
		right = this.state.isRight();
		var up = this.state.isUp();
		// || (this.sprite.body.blocked.down && this.cursors.up.isDown));
	    if(left){
			this.sprite.body.velocity.x = -Character.VELX;
	        this.sprite.animations.play('left');
	    }
	    else if(right){
	        this.sprite.body.velocity.x = Character.VELX;
	        this.sprite.animations.play('right');
	    }
	    else{
	        this.sprite.animations.stop();
	        this.sprite.frame = 4;
	    }
	    if(up){
	        this.sprite.body.velocity.y = -Character.VELY;
			this.state.remove("U");
	    }
	};
	
	Character.VELX = 500;
	Character.VELY = 400;
	Character.FORCE_DELAY = 1005;
	
	return Character;
	
});
	

