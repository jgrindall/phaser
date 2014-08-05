
app.ButtonGroup = function(game){
	this.game = game;
	this.x0 = null;
	this.spaceX = this.game.world.width / app.ButtonGroup.PER_PAGE_X;
	this.spaceY = this.game.world.height / app.ButtonGroup.PER_PAGE_Y;
	this.levelSelectSignal = new Phaser.Signal();
};

app.ButtonGroup.prototype.create = function(){
	this.group = this.game.add.group();
    this.group.inputEnabled = true;
	for(i = 1; i <= app.ButtonGroup.NUM_BUTTONS_X; i++){
		for(j = 1; j <= app.ButtonGroup.NUM_BUTTONS_Y; j++){
			b = new app.LevelsButton(this.game);
			b.create();
			b.sprite.x = this.spaceX * (i - 1);
			b.sprite.y = this.spaceY * j;
			b.mouseUpSignal.add(this.buttonUp, this);
			b.mouseDownSignal.add(this.buttonDown, this);
			this.group.add(b.sprite);
		}
	}
};

app.ButtonGroup.prototype.snap = function() {
	this.group.x = this.spaceX * Math.round(this.group.x / this.spaceX);
};

app.ButtonGroup.prototype.buttonUp = function(data) {
	this.game.input.moveCallback = null;
	this.x0 = null;
	var targetIndex = this.group.getIndex(data.target.sprite);
	if(Math.abs(this.dx)>10){
		this.snap();
	}
	else{
		console.log("targetIndex "+targetIndex);
		this.levelSelectSignal.dispatch({"key":this.key, "index":targetIndex});
	}
};

app.ButtonGroup.prototype.move = function(pointer, x, y) {
	if(this.x0 === null){
		this.x0 = x;
	}
	this.dx = this.x0 - x;
	var maxX = 0;
	var minX = -1 * this.spaceX * (app.ButtonGroup.NUM_BUTTONS_X - app.ButtonGroup.PER_PAGE_X);
	var x = this.startX - this.dx;
	console.log("x "+x);
	x = Math.min(Math.max(x, minX), maxX);
	console.log("x "+x);
	this.group.x = x;
};

app.ButtonGroup.prototype.buttonDown = function(data) {
	this.startX = this.group.x;
	this.dx = 0;
	this.game.input.moveCallback = $.proxy(this.move, this);
};

app.ButtonGroup.PER_PAGE_X = 5;
app.ButtonGroup.PER_PAGE_Y = 5;
app.ButtonGroup.NUM_BUTTONS_X = 12;
app.ButtonGroup.NUM_BUTTONS_Y = 5;


