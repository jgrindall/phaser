
define(function(require, exports){
	
	var AbstractButton = function(game, asset, frames){
		this.game = game;
		this.asset = asset;
		this.frames = frames;
		this.mouseDownSignal = new Phaser.Signal();
		this.mouseUpSignal = new Phaser.Signal();
	};

	AbstractButton.prototype.preload = function(){
	
	};

	AbstractButton.prototype.goToFrame = function(i){
		this.sprite.setFrames(this.frames[i], this.frames[i], this.frames[i], this.frames[i]);
	};

	AbstractButton.prototype.resetFrames = function(i){
		this.sprite.setFrames(this.frames[0], this.frames[1], this.frames[2], this.frames[3]);
	};

	AbstractButton.prototype.callback = function(){

	};

	AbstractButton.prototype.create = function(){
		//game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		this.sprite = new Phaser.Button(this.game, 0, 0, this.asset, this.callback, this, this.frames[0], this.frames[1], this.frames[2], this.frames[3]);
		this.sprite.events.onInputUp.add(this.mouseUp, this);
		this.sprite.events.onInputDown.add(this.mouseDown, this);
		this.sprite.inputEnabled = true;
		this.resetFrames();
	};

	AbstractButton.prototype.mouseUp = function(){
		this.mouseUpSignal.dispatch({"target":this});
	};

	AbstractButton.prototype.mouseDown = function(){
		this.mouseDownSignal.dispatch({"target":this});
	}

	AbstractButton.prototype.update = function(){
	
	};

	return AbstractButton;

});

