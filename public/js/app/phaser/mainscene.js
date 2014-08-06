
define(function(require, exports){
	
	var Scene = require('app/phaser/scene');
	var Preloader = require('app/phaser/preloader');
	var NavButton = require('app/phaser/navbutton');
	var TextFactory = require('app/phaser/textfactory');
	
	var MainScene  = function(key, game){
		Scene.call(this, key, game);
		this.numLoaded = 0;
	};

	MainScene.prototype = Object.create(Scene.prototype);
	MainScene.prototype.constructor = MainScene;

	MainScene.prototype.preload = function() {
		this.preloadLabel = TextFactory.make(this.game, this.game.world.centerX - 300, 50, "Loaded 0%");
		this.preloader = new Preloader(this.game);
		this.preloader.loadSignal.add(this.loadProgress, this);
		this.preloader.start();
	};

	MainScene.prototype.loadProgress = function(data) {
		var p = Math.round(data.numLoaded * 100 / data.total);
		this.preloadLabel.text = "Loaded "+p+"%";
	};

	MainScene.prototype.create = function() {
		this.startButton = new NavButton(this.game);
		this.tutorialButton = new NavButton(this.game);
		this.startButton.create();
		this.tutorialButton.create();
		this.game.world.add(this.startButton.sprite);
		this.game.world.add(this.tutorialButton.sprite);
		this.tutorialButton.sprite.x = 100;
		this.startButton.sprite.y = 200;
		this.tutorialButton.sprite.y = 200;
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		this.tutorialButton.mouseUpSignal.add(this.tutorialButtonClicked, this);
		this.label = TextFactory.make(this.game, this.game.world.centerX - 300, 0, "Main menu");
	};

	MainScene.prototype.startButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	MainScene.prototype.tutorialButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	MainScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	MainScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return MainScene;

});
	
	





