
define(function(require, exports){
	
	var Scene = require('app/phaser/scene');
	var ButtonGroup = require('app/phaser/buttongroup');
	var TextFactory = require('app/phaser/textfactory');
	
	var LevelsScene  = function(key, game){
		Scene.call(this, key, game);
	};

	LevelsScene.prototype = Object.create(Scene.prototype);
	LevelsScene.prototype.constructor = LevelsScene;

	LevelsScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	LevelsScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.group = new ButtonGroup(this.game);
		this.group.create();
		this.group.levelSelectSignal.add(this.levelSelect, this);
		this.text = TextFactory.make(this.game, this.game.world.centerX - 300, 0, "Choose a level");
	};

	LevelsScene.prototype.levelSelect = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "index":data.index});
	};

	LevelsScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	LevelsScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return LevelsScene;

});
	
	



