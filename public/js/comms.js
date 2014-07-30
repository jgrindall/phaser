app.Comms = function(game){
	this.game = game;
	this.dragger = null;
	this.data = [3, 4];
};

app.Comms.prototype.preload = function(){
	
};

app.Comms.prototype.create = function () {
	var i, b, _this = this;
	this.group0 = this.game.add.group();
	this.group1 = this.game.add.group();
	$.each(this.data, function(key, v){
		$.each(Array(v), function(i) {
			b = app.BlockTypes.create(key, _this.game);
			b.create();
			b.clickSignal.add($.proxy(_this.blockDown, _this));
			b.releaseSignal.add($.proxy(_this.blockUp, _this));
			b.origPos = {"x":b.sprite.x, "y":b.sprite.y};
			_this.group0.add(b.sprite);
		});  
		
	});
	this.game.input.onDown.add($.proxy(this.onDown, this));
};

app.Comms.prototype.onUp = function() {
	this.game.input.moveCallback = null;
};

app.Comms.prototype.onDown = function() {
	var input = this.game.input;
	var hits = this.group0.hitTest(input) || this.group1.hitTest(input);
	if(!hits){
		this.startY = this.group1.y;
		this.y0 = input.activePointer.y;
		input.onUp.add($.proxy(this.onUp, this));
		input.moveCallback = $.proxy(this.move, this);
	}
};

app.Comms.prototype.move = function() {
	console.log("move");
	var input = this.game.input;
	this.group1.y = this.startY - (this.y0 - input.activePointer.y);
};

app.Comms.prototype.blockDown = function(data) {
	console.log("blockDown");
	if(this.group0.getIndex(data.target.sprite) >= 0){
		// on the left
		this.group0.remove(data.target.sprite);
		this.group1.add(data.target.sprite);
		data.target.sprite.y -= this.group1.y;
	}
};
	
app.Comms.prototype.blockUp = function(data) {
	console.log("blockUp");
	var input = this.game.input;
	input.onUp.removeAll();
	input.moveCallback = null;
	var block = data.target;
	var sprite = block.sprite;
	if(sprite.x > 200){
		console.log("snap");
		sprite.y = 120*Math.round(sprite.y/120);
	}
	else{
		console.log("go back");
		sprite.x = block.origPos.x;
		sprite.y = block.origPos.y;
		this.group1.remove(sprite);
		this.group0.add(sprite);
	}
};

app.Comms.prototype.update = function() {
    
};
