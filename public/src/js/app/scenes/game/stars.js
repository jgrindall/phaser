define(['app/game', 'app/scenes/game/star'], function(Game, Star){
	
	"use strict";
	
	var Stars = function(options){
		this.options = options;
		this.create();
	};
	
	Stars.prototype.addStar = function () {
		var star = new Star({"x":100 + Math.random()*600, "y":Math.random()*200});
		this.group.add(star.sprite);
	};
	
	Stars.prototype.create = function () {
		this.group = new Phaser.Group(Game.getInstance());
		this.addStar();
		this.addStar();
	};
	
	Stars.prototype.update = function () {
		
	};
	
	Stars.prototype.destroy = function () {
		this.group.destroy(true);	
	};
	
	return Stars;
	
});
