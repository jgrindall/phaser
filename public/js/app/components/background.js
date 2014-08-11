
define(['app/game'], function(Game){
	
	"use strict";
	
	var Background = function(options){
		this.options = options;
	};

	Background.prototype.preload = function(){
	
	};

	Background.prototype.create = function(){
		var w, h;
		w = Game.getWidth();
    	h = Game.getHeight();
    	this.sprite = new Phaser.TileSprite(Game.getInstance(), 0, 0, w, h, this.options.asset);
	    this.sprite.fixedToCamera = true;
	};
	
	return Background;

});




