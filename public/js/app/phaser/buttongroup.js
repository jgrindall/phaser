
define(function(require, exports){
	
	var LevelsButton = require('app/phaser/levelsbutton');
	
	var ButtonGroup = function(game){
		this.game = game;
		this.x0 = null;
		this.spaceX = this.game.world.width / ButtonGroup.PER_PAGE_X;
		this.spaceY = (this.game.world.height - ButtonGroup.TOP_Y) / ButtonGroup.PER_PAGE_Y;
		this.levelSelectSignal = new Phaser.Signal();
	};

	ButtonGroup.prototype.create = function(){
		this.group = this.game.add.group();
	    this.group.inputEnabled = true;
		for(i = 1; i <= ButtonGroup.NUM_BUTTONS_X; i++){
			for(j = 1; j <= ButtonGroup.NUM_BUTTONS_Y; j++){
				b = new LevelsButton(this.game);
				b.create();
				b.sprite.x = this.spaceX * (i - 1);
				b.sprite.y = ButtonGroup.TOP_Y + this.spaceY * (j - 1);
				b.mouseUpSignal.add(this.buttonUp, this);
				b.mouseDownSignal.add(this.buttonDown, this);
				this.group.add(b.sprite);
			}
		}
	};

	ButtonGroup.prototype.snap = function() {
		this.group.x = this.spaceX * Math.round(this.group.x / this.spaceX);
	};

	ButtonGroup.prototype.buttonUp = function(data) {
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

	ButtonGroup.prototype.move = function(pointer, x, y) {
		var x, minX, maxX = 0;
		if(this.x0 === null){
			this.x0 = x;
		}
		this.dx = this.x0 - x;
		minX = -1 * this.spaceX * (ButtonGroup.NUM_BUTTONS_X - ButtonGroup.PER_PAGE_X);
		x = this.startX - this.dx;
		x = Math.min(Math.max(x, minX), maxX);
		this.group.x = x;
	};

	ButtonGroup.prototype.buttonDown = function(data) {
		this.startX = this.group.x;
		this.dx = 0;
		this.game.input.moveCallback = $.proxy(this.move, this);
	};

	ButtonGroup.PER_PAGE_X = 4;
	ButtonGroup.PER_PAGE_Y = 4;
	ButtonGroup.NUM_BUTTONS_X = 12;
	ButtonGroup.NUM_BUTTONS_Y = 5;
	ButtonGroup.TOP_Y = 50;
	
	return ButtonGroup;

});


