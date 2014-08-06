
define(function(require, exports){
	
	var Scene = require('app/phaser/scene');
	var Commands = require('app/phaser/commands');
	var Tabs = require('app/phaser/tabs');
	var commsData = require('app/phaser/commsdata');
	
	var CommScene  = function(key, game){
		Scene.call(this, key, game);
	};
	
	CommScene.prototype = Object.create(Scene.prototype);
	CommScene.prototype.constructor = CommScene;

	CommScene.prototype.loadLevel = function() {
		this.commands.loadLevel();
		this.tabs.loadLevel();
		this.tabs.init();
	};

	CommScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	CommScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.button = new NavButton(this.game);
		this.commands = new Commands(this.game, commsData);
		this.tabs = new Tabs(this.game, commsData);
		this.button.create();
		this.tabs.create();
		this.tabs.group.x = 300;
		this.commands.create();
		this.game.world.add(this.button.sprite);
		this.game.world.add(this.tabs.group);
		this.button.mouseUpSignal.add(this.buttonClicked, this);
		this.tabs.selectSignal.add(this.tabSelected, this);
		this.loadLevel();
	};

	CommScene.prototype.tabSelected = function(data) {
		commsData.setSelectedTab(data);
	};

	CommScene.prototype.buttonClicked = function(data) {
		this.navigationSignal.dispatch({"key": this.key});
	};

	CommScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	CommScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
		this.commands.shutdown();
		this.tabs.shutdown();
	};
	
	return CommScene;

});
	
	



