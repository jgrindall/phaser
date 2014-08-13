
define(['app/game'], function(Game){
	
	"use strict";
	
	var Platforms = function(){
		
	};

	Platforms.prototype.preload = function(){
    
	};

	Platforms.prototype.create = function () {
		this.map = new Phaser.Tilemap(Game.getInstance(), 'level1');
	    this.map.addTilesetImage('tiles1');
	    this.map.setCollisionByExclusion([ ]);
	    this.tileMapLayer = this.map.createLayer('tileLayer1');
	    //this.tileMapLayer.debug = true;
	    this.tileMapLayer.resizeWorld();
	};

	Platforms.prototype.update = function() {
    
	};
	
	return Platforms;
	
});
	



