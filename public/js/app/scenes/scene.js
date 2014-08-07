
define(function(require, exports){
	
	var Scene  = function(key, game){
		this.game = game;
		this.key = key;
		this.navigationSignal = new Phaser.Signal();
	};

	Scene.prototype.preload = function() {
	
	};

	Scene.prototype.create = function() {
	
	};

	Scene.prototype.update = function() {
    
	};

	Scene.prototype.shutdown = function() {
		console.log("shutdown scene //TODO - tidy up");
	};
	
	return Scene;

});
	
	



