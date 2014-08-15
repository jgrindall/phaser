define(['app/game'], function(Game){
	
	"use strict";
	
	var Star = function(options){
		options.asset = 'star';
		this.options = options;
		this.create();
	};
	
	Star.prototype.create = function () {
		this.sprite = new Phaser.Sprite(Game.getInstance(), this.options.x, this.options.y, this.options.asset);
	    Game.getInstance().physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.enableBody = true;
		this.sprite.body.bounce.y = 0.1;
		this.sprite.body.gravity.y = 400;
		this.sprite.body.velocity.y = 1;
	};
	
	return Star;
	
});
