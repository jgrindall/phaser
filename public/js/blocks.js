app.Block = function(game, type, img){
	this.game = game;
	this.type = type;
	this.img = img;
	this.clickSignal = new Phaser.Signal();
	this.releaseSignal = new Phaser.Signal();
};

app.Block.prototype.preload = function(){

};

app.Block.prototype.toString = function(){
	return "Block at "+this.sprite.x+","+this.sprite.y+" of type "+this.type;
};

app.Block.prototype.create = function () {
	this.sprite = new Phaser.Sprite(this.game, 0, 128*this.type, this.img);
	this.sprite.block = this;
	this.sprite.inputEnabled = true;
	this.sprite.input.enableDrag(false, true);
	this.sprite.events.onInputDown.add(this.clickBlock, this);
	this.sprite.events.onDragStop.add(this.releaseBlock, this);
};

app.Block.prototype.clickBlock = function() {
	this.clickSignal.dispatch({target:this});
};

app.Block.prototype.releaseBlock = function() {
	this.releaseSignal.dispatch({target:this});
};

///////

app.BlockTypes = function(){
	
};

app.BlockTypes.create = function(type, game){
	if(type == 0){
		return new app.Block(game, 0, 'block0');
	}
	else{
		return new app.Block(game, 1, 'block1');
	}
};





