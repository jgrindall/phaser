
define(['app/scenes/scene', 'app/components/buttons/navbutton', 'app/components/buttons/pausebutton', 'app/scenes/comms/commsdata', 'app/scenes/game/controls', 'app/scenes/game/gamemode', 'app/scenes/game/gameview', 'app/scenes/game/gamemenu', 'app/game'],

function(Scene, NavButton, PauseButton, commsData, Controls, GameMode, GameView, GameMenu, Game){
	
	"use strict";
	
	var GameScene  = function(key){
		Scene.call(this, key);
		this.gameMenu = null;
	};
	
	GameScene.prototype = Object.create(Scene.prototype);
	GameScene.prototype.constructor = GameScene;

	GameScene.prototype.preload = function() {
		Scene.prototype.preload.apply(this, arguments);
	};
	
	GameScene.prototype.addControls = function() {
		this.controls = new Controls({"bounds":{"x":0, "y":0}});
		this.controls.create();
		Game.getInstance().world.add(this.controls.group);
		this.controls.upSignal.add(this.gameView.controlUp, this.gameView);
		this.controls.downSignal.add(this.gameView.controlDown, this.gameView);
	};
	GameScene.prototype.showControls = function(tf) {
		this.controls.visible = tf;
	};
	
	GameScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.gameView = new GameView();
		this.pauseButton = new PauseButton({"x":Game.getInstance().world.width - PauseButton.WIDTH, "y":0});
		this.gameView.create();
	    this.pauseButton.create();
		this.pauseButton.sprite.fixedToCamera = true;
		this.pauseButton.mouseUpSignal.add(this.buttonClicked, this);
		Game.getInstance().world.add(this.pauseButton.sprite);
		if(1==1 || commsData.mode != GameMode.COMMANDS){
			this.addControls();
		}
		this.checkLaunch();
	};
	
	GameScene.prototype.checkLaunch = function() {
		var that = this;
		if(commsData.mode === GameMode.UNKNOWN){
			setTimeout(function(){
				that.showMenu();
			}, 1000);
		}
		else if(commsData.mode === GameMode.COMMANDS){
			setTimeout(function(){
				that.gameView.playBack();
			}, 1000);
		}
	};
	
	GameScene.prototype.showMenu = function(data) {
		var options, that = this;
		Game.pausePhysics();
		options = {"bounds":{"x":0, "y":0, "w":300, "h":200}};
		if(!this.gameMenu){
			this.gameMenu = new GameMenu(options);
			this.gameMenu.create();
			Game.getInstance().world.add(this.gameMenu.group);
			this.gameMenu.selectSignal.add(this.menuClick, this);
			Game.getInstance().add.tween(this.gameMenu.group).to({"y": -100, "x":200}, 250, Phaser.Easing.Quadratic.Out, true, 20, false);
		}
	};
	
	GameScene.prototype.menuClick = function(data) {
		if(data.index === 0){
			commsData.setMode(GameMode.INTERACTIVE);
			this.hideMenu();
		}
		else if(data.index === 1){
			commsData.setMode(GameMode.COMMANDS);
			this.navigationSignal.dispatch({"key":this.key, "target":"comms"});
		}
		else if(data.index === 2){
			this.navigationSignal.dispatch({"key":this.key, "target":"levels"});
		}
		else if(data.index === 3){
			this.navigationSignal.dispatch({"key":this.key, "target":"home"});
		}
		else if(data.index === 4){
			this.hideMenu();
		}
	};
	
	GameScene.prototype.hideMenu = function(data) {
		Game.unPausePhysics();
		Game.getInstance().world.remove(this.gameMenu.group);
		this.gameMenu.selectSignal.removeAll(this);
		this.gameMenu.destroy();
		this.gameMenu = null;
	};
	
	GameScene.prototype.buttonClicked = function(data) {
		this.showMenu();
	};

	GameScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
		this.gameView.update();
	};
	
	GameScene.prototype.shutdown = function() {
		this.gameView.shutdown();
		this.hideMenu();
		Scene.prototype.shutdown.apply(this, arguments);
	};
	
	return GameScene;

});
	
