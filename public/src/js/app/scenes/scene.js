
define(['app/game', 'app/components/background'], function(Game, Background){
	
	"use strict";
	
	var Scene  = function(key){
		this.key = key;
		this.navigationSignal = new Phaser.Signal();
	};

	Scene.prototype.preload = function() {
	
	};
	
	Scene.prototype.addChildren = function() {
		this.bg = new Background({"asset":'sky'});
		this.bg.create();
		Game.getInstance().world.add(this.bg.sprite);
	};
	
	Scene.prototype.create = function() {
		this.addChildren();
	};
	
	Scene.prototype.addListeners = function() {
		//
	};
	
	Scene.prototype.update = function() {
    	//
	};

	Scene.prototype.shutdown = function() {
		console.log("shutdown scene //TODO - tidy up");
	};
	
	return Scene;

});
	
	



