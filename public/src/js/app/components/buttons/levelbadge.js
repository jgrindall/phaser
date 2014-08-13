
define(['app/components/buttons/levelsbutton', 'app/game', 'app/components/container', 'app/utils/textfactory'],

function(LevelsButton, Game, Container, TextFactory){
	
	"use strict";
		
	var LevelBadge = function(options){
		Container.call(this, options);
		this.state = this.options.state;
		this.mouseUpSignal = new Phaser.Signal();
	};
	
	LevelBadge.prototype = Object.create(Container.prototype);
	LevelBadge.prototype.constructor = LevelBadge;
	
	LevelBadge.prototype.preload = function(){
    	
	};
	
	LevelBadge.prototype.addText = function () {
		var text = "" + (this.options.index + 1);
		this.label = TextFactory.make(this.options.bounds.x + 40, this.options.bounds.y + 10, text);
		this.group.add(this.label);
	};
	
	LevelBadge.prototype.select = function () {
		this.mouseUpSignal.dispatch({"target":this});
	};
	
	LevelBadge.prototype.addDecor = function () {
		
	};
	
	LevelBadge.prototype.getAsset = function () {
		return LevelBadge.ASSETS[this.state];
	};
	
	LevelBadge.prototype.addMain = function () {
		this.button = new LevelsButton({"x":this.options.bounds.x, "y":this.options.bounds.y, "asset":this.getAsset()});
		this.button.create();
		this.button.mouseUpSignal.add(this.select, this);
		this.group.add(this.button.sprite);
	};
	
	LevelBadge.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addMain();
		this.addDecor();
		this.addText();
	};
	
	LevelBadge.WIDTH = 150;
	LevelBadge.HEIGHT = 150;
	
	LevelBadge.OPEN = 0;
	LevelBadge.LOCKED = 1;
	LevelBadge.COMPLETE = 2;
	
	LevelBadge.ASSETS = ['levelbutton', 'levelbuttonlocked', 'levelbuttondone'];
	
	return LevelBadge;
	
});
	







