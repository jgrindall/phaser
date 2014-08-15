
define(['app/game'], function(Game){
	
	"use strict";
	
	var Bullets = function(options){
		this.options = options;
		this.create();
	};
	
	Bullets.prototype.create = function () {
		this.group = new Phaser.Group(Game.getInstance(), null, 'bullets', false, true, Phaser.Physics.ARCADE);
    	this.group.createMultiple(10, 'killarea', 0, false);
    	this.group.setAll('outOfBoundsKill', true);
    	this.group.setAll('checkWorldBounds', true);
	};
	
	Bullets.prototype.destroy = function () {
		this.group.destroy(true);
	};
	
	return Bullets;
	
});



		