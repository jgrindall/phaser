
define(function(require, exports){
	
	var NavButton = require('app/phaser/navbutton');
	
	var GameMenu = function(game){
		this.game = game;
		this.selectSignal = new Phaser.Signal();
	};

	GameMenu.prototype.preload = function(){
    
	};

	GameMenu.prototype.create = function () {
		this.group = this.game.add.group();
		this.group.fixedToCamera = true;
		for(i = 1; i <= 3; i++){
			b = new NavButton(this.game);
			b.create();
			b.sprite.x = 200 * (i - 1);
			b.sprite.y = 200;
			b.mouseUpSignal.add(this.buttonUp, this);
			this.group.add(b.sprite);
		}
	};
	
	GameMenu.prototype.buttonUp = function(data) {
		console.log("button up");
		this.selectSignal.dispatch({"target":"clicked!"});
	};
	
	GameMenu.prototype.update = function() {
    
	};
	
	return GameMenu;
	
});
	



