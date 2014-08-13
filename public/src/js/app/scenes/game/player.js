
define(['app/scenes/game/character', 'app/game'], function(Character, Game){
	
	"use strict";
	
	var Player = function(){
		Character.call(this);
	};

	Player.prototype = Object.create(Character.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.makeSprite = function () {
		Character.prototype.makeSprite.call(this, arguments);
	    this.sprite = new Phaser.Sprite(Game.getInstance(), 32, 32, 'dude');
		this.sprite.enableBody = true;
		Game.getInstance().physics.enable(this.sprite, Phaser.Physics.ARCADE);
		var body = this.sprite.body;
	    body.bounce.y = 0.2;
	    body.gravity.y = 20;
		body.velocity.y = -5;
	    body.collideWorldBounds = true;
	    this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
	    this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
	};
	
	Player.prototype.destroy = function () {
		Character.prototype.destroy.call(this, arguments);
		this.sprite.destroy(true);
		this.sprite = null;
	};
	
	return Player;
});
	
