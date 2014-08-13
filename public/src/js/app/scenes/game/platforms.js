
define(['app/game'], function(Game){
	
	"use strict";
	
	var Platforms = function(){
		
	};

	Platforms.prototype.create = function () {
		this.map = new Phaser.Tilemap(Game.getInstance(), 'level1');
	    this.map.addTilesetImage('tiles1');
	    this.map.setCollisionByExclusion([ ]);
	    this.tileMapLayer = this.map.createLayer('tileLayer1');
	    this.tileMapLayer.resizeWorld();
	};
	
	Platforms.prototype.destroy = function() {
		this.tileMapLayer.destroy(true);
		this.tileMapLayer = null;
		this.map = null;
	};
	
	return Platforms;
	
});
	



