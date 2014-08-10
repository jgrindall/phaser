define(['app/game'], function(Game){
	
	var Block = function(type, img){
		this.type = type;
		this.img = img;
		this.clickSignal = new Phaser.Signal();
		this.releaseSignal = new Phaser.Signal();
	};

	Block.prototype.preload = function(){

	};

	Block.prototype.toString = function(){
		return "Block at " + this.sprite.x + "," + this.sprite.y + " of type " + this.type;
	};

	Block.prototype.create = function () {
		this.sprite = new Phaser.Sprite(Game.getInstance(), 0, 128*this.type, this.img);
		this.sprite.block = this;
		this.sprite.inputEnabled = true;
		this.sprite.input.enableDrag(false, true);
		this.sprite.events.onInputDown.add(this.clickBlock, this);
		this.sprite.events.onDragStop.add(this.releaseBlock, this);
	};

	Block.prototype.clickBlock = function() {
		this.clickSignal.dispatch({target:this});
	};

	Block.prototype.releaseBlock = function() {
		this.releaseSignal.dispatch({target:this});
	};
	
	return Block;
	
});
