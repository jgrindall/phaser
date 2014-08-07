
define(function(require, exports){
	
	var Player = require('app/scenes/game/player');
	var Platforms = require('app/scenes/game/platforms');
	var Stars = require('app/scenes/game/stars');
	var Bg = require('app/components/background');
	var commsData = require('app/scenes/comms/commsdata');
	
	var GameView  = function(game){
		this.game = game;
	};
	
	GameView.CHECK_STILL = 500;

	GameView.prototype.nextCommand = function() {
		this.commandNum++;
		if(this.commandNum == this.commandStack.length){
			// end
		}
		else{
			var s = this.commandStack[this.commandNum];
			this.player.setForce(s);
		}
	};

	GameView.prototype.create = function() {
		this.commandStack = commsData.getCommands();
		this.commandNum = -1;
		this.player = new Player(this.game);
		this.platforms = new Platforms(this.game);
		this.stars = new Stars(this.game);
		this.bg = new Bg(this.game);
		this.bg.create();
	    this.player.create();
		this.platforms.create();
		this.stars.create();
		this.game.camera.follow(this.player.sprite);
	};

	GameView.prototype.update = function() {
	    this.game.physics.arcade.collide(this.player.sprite, this.platforms.layer);
		this.game.physics.arcade.collide(this.stars.body, this.platforms.layer);
		this.game.physics.arcade.overlap(this.player.sprite, this.stars.body, this.collectStar, null, this);
		this.player.update();
		this.platforms.update();
		this.stars.update();
		this.checkStill();
	};

	GameView.prototype.checkStill = function(){
		var _this = this;
		if(this.player.isStill()){
			if(!this.still){
				this.still = true;
				if(this.checkEndTimeout){
					clearTimeout(this.checkEndTimeout);
				}
				this.checkEndTimeout = setTimeout(function(){
					_this.nextCommand();
				}, GameView.CHECK_STILL);
			}
		}
		else{
			this.still = false;
		}
	};

	GameView.prototype.collectStar = function(player, star){
		star.kill();
	};

	GameView.prototype.shutdown = function() {
		
	};
	
	return GameView;

});
	
	

