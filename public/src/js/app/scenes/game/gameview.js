
define(['app/game', 'app/scenes/game/player', 'app/components/background', 'app/scenes/game/stars', 'app/commsdata', 'app/locdata', 'app/scenes/game/platforms', 'app/scenes/game/gamemode'],

function(Game, Player, Background, Stars, CommsData, LocData, Platforms, GameMode){
	
	"use strict";
	
	var GameView  = function(){
		this.stackCompleteSignal = new Phaser.Signal();
	};
	
	GameView.CHECK_STILL = 500;
	
	GameView.prototype.nextCommand = function() {
		var s;
		this.commandNum++;
		if(this.commandNum === this.commandStack.length){
			this.stackCompleteSignal.dispatch({});
		}
		else{
			s = this.commandStack[this.commandNum];
			this.player.setForce(s);
		}
	};
	
	GameView.prototype.controlUp = function(data) {
		this.player.controlUp(data);
	};
	
	GameView.prototype.controlDown = function(data) {
		this.player.controlDown(data);
	};
	
	GameView.prototype.addBg = function() {
		this.bg = new Background({"asset":'background'});
		this.bg.create();
		Game.getInstance().world.add(this.bg.sprite);
	};
	
	GameView.prototype.addPlatforms = function() {
		this.platforms = new Platforms();
		this.platforms.create();
		Game.getInstance().world.add(this.platforms.tileMapLayer);
	};
	
	GameView.prototype.addPlayer = function() {
		this.player = new Player();
		this.player.create();
		Game.getInstance().world.add(this.player.sprite);
	};
	
	GameView.prototype.addStars = function() {
		this.stars = new Stars();
		this.stars.create();
		Game.getInstance().world.add(this.stars.group);
	};
	
	GameView.prototype.create = function() {
		this.commandStack = CommsData.getInstance().getCommands();
		this.commandNum = -1;
		this.addBg();
		this.addPlatforms();
		this.addPlayer();
		this.addStars();
		Game.getInstance().camera.follow(this.player.sprite);
	};

	GameView.prototype.update = function() {
	    var physics = Game.getPhysics();
	   	Game.getPhysics().collide(this.player.sprite, this.platforms.tileMapLayer);
		Game.getPhysics().collide(this.stars.group, this.platforms.tileMapLayer);
		Game.getPhysics().overlap(this.player.sprite, this.stars.group, this.collectStar, null, this);
		this.player.update();
		this.stars.update();
		if(LocData.getInstance().getMode() === GameMode.COMMANDS){
			this.checkStill();
		}
	};
	
	GameView.prototype.playBack = function(){
		this.checkStill();
	};
	
	GameView.prototype.checkStill = function(){
		var that = this;
		if(this.player.isStill()){
			if(!this.still){
				this.still = true;
				if(this.checkEndTimeout){
					clearTimeout(this.checkEndTimeout);
				}
				this.checkEndTimeout = setTimeout(function(){
					that.nextCommand();
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

	GameView.prototype.destroy = function() {
		this.bg.destroy();
		this.platforms.destroy();
		this.player.destroy();
		this.bg = null;
		this.platforms = null;
		this.player = null;
	};
	
	return GameView;

});
	
