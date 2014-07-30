app.AbstractBlock = function(game, key, img){
	this.game = game;
	this.key = key;
	this.img = img;
	this.clickSignal = new Phaser.Signal();
	this.releaseSignal = new Phaser.Signal();
};

app.AbstractBlock.prototype.preload = function(){

};

app.AbstractBlock.prototype.create = function () {
	this.sprite = new Phaser.Sprite(this.game, 0, 128*this.key, this.img);
	this.sprite.inputEnabled = true;
	this.sprite.input.enableDrag(false, true);
	this.sprite.events.onInputDown.add(this.clickBlock, this);
	this.sprite.events.onDragStop.add(this.releaseBlock, this);
};

app.AbstractBlock.prototype.clickBlock = function() {
	this.clickSignal.dispatch({target:this});
};

app.AbstractBlock.prototype.releaseBlock = function() {
	console.log("release");
	this.releaseSignal.dispatch({target:this});
};



app.Block0 = function(game){
	app.AbstractBlock.call(this, game, 0, 'atari1');
};

app.Block0.prototype = Object.create(app.AbstractBlock.prototype);
app.Block0.prototype.constructor = app.Block0;

app.Block0.prototype.preload = function(){
	app.AbstractBlock.prototype.preload.call(this);
};

app.Block0.prototype.create = function () {
	app.AbstractBlock.prototype.create.call(this);
};


app.Block1 = function(game){
	app.AbstractBlock.call(this, game, 1, 'atari2');
};

app.Block1.prototype = Object.create(app.AbstractBlock.prototype);
app.Block1.prototype.constructor = app.Block0;

app.Block1.prototype.preload = function(){
	app.AbstractBlock.prototype.preload.call(this);
};

app.Block1.prototype.create = function () {
	app.AbstractBlock.prototype.create.call(this);
};



app.BlockTypes = function(){
	
};

app.BlockTypes.create = function(type, game){
	if(type == 0){
		return new app.Block0(game);
	}
	else{
		return new app.Block1(game);
	}
};





