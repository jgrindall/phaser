
app.ButtonGroup = function(game){
	this.game = game;
	this.x0 = null;
	this.levelSelectSignal = new Phaser.Signal();
};

app.ButtonGroup.prototype.create = function(){
	this.group = this.game.add.group();
    this.group.inputEnabled = true;
    for(i = 1; i <= app.ButtonGroup.NUM_BUTTONS; i++){
		b = new app.LevelsButton(this.game);
		b.create();
		b.sprite.x = 100;
		b.sprite.y = 100*i;
		b.mouseUpSignal.add(this.buttonUp, this);
		b.mouseDownSignal.add(this.buttonDown, this);
		this.group.add(b.sprite);
	}
};

app.ButtonGroup.prototype.snap = function() {
	this.group.x = 100*Math.round(this.group.x/100);
};

app.ButtonGroup.prototype.buttonUp = function(data) {
	this.game.input.moveCallback = null;
	this.x0 = null;
	var targetIndex = this.group.getIndex(data.target.sprite);
	if(Math.abs(this.dx)>10){
		this.snap();
	}
	else{
		this.levelSelectSignal.dispatch({"key":this.key, "index":targetIndex});
	}
};

app.ButtonGroup.prototype.move = function(pointer, x, y) {
	if(this.x0 === null){
		this.x0 = x;
	}
	this.dx = this.x0 - x;
	this.group.x = this.startX - this.dx;
};

app.ButtonGroup.prototype.buttonDown = function(data) {
	this.startX = this.group.x;
	this.dx = 0;
	this.game.input.moveCallback = $.proxy(this.move, this);
};

app.ButtonGroup.NUM_BUTTONS = 6;

