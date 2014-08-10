
define(['app/game'], function(Game){
	
	var Platforms = function(){
		
	};

	Platforms.prototype.preload = function(){
    
	};

	Platforms.prototype.create = function () {
		this.map = new Phaser.Tilemap(Game.getInstance(), 'level1');
	    this.map.addTilesetImage('tiles1');
	    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
	    this.tileMapLayer = this.map.createLayer('tileLayer1');
	    this.tileMapLayer.debug = true;
	    this.tileMapLayer.resizeWorld();
	};

	Platforms.prototype.update = function() {
    
	};
	
	return Platforms;
	
});
	



