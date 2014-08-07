
define(function(require, exports){
	
	var Scene = require('app/phaser/scene');
	var NavButton = require('app/phaser/navbutton');
	var GameView = require('app/phaser/gameview');
	var GameMenu = require('app/phaser/gamemenu');
	
	var GameScene  = function(key, game){
		Scene.call(this, key, game);
	};
	
	GameScene.prototype = Object.create(Scene.prototype);
	GameScene.prototype.constructor = GameScene;

	GameScene.prototype.preload = function() {
		Scene.prototype.preload.apply(this, arguments);
	};

	GameScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		var that = this;
		this.gameView = new GameView(this.game);
		this.button = new NavButton(this.game);
		this.gameView.create();
	    this.button.create();
		this.button.sprite.fixedToCamera = true;
		this.button.mouseUpSignal.add(this.buttonClicked, this);
		this.game.world.add(this.button.sprite);
		setTimeout(function(){
			that.showMenu();
		}, 5000);
	};

	GameScene.prototype.showMenu = function(data) {
		this.gameMenu = new GameMenu(this.game);
		this.gameMenu.create();
		this.gameMenu.selectSignal.add(this.menuClick, this);
	};

	GameScene.prototype.menuClick = function(data) {
		console.log("clicked "+JSON.stringify(data));
	};
	
	GameScene.prototype.hideMenu = function(data) {
		console.log("hide");
	};
	
	GameScene.prototype.buttonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	GameScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	    this.gameView.update();
	};
	
	GameScene.prototype.shutdown = function() {
		this.gameView.shutdown();
		Scene.prototype.shutdown.apply(this, arguments);
	};
	
	return GameScene;

});
	
	

