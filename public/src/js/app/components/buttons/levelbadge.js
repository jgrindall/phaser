
define(['app/components/buttons/levelsbutton', 'app/game', 'app/components/container', 'app/utils/textfactory'],

function(LevelsButton, Game, Container, TextFactory){
	
	"use strict";
		
	var LevelBadge = function(options){
		Container.call(this, options);
		this.mouseUpSignal = new Phaser.Signal();
		this.unlocked = Math.floor(Math.random() * 2);
		this.done = Math.floor(Math.random() * 2);
	};
	
	LevelBadge.WIDTH = 150;
	LevelBadge.HEIGHT = 150;
	
	LevelBadge.prototype = Object.create(Container.prototype);
	LevelBadge.prototype.constructor = LevelBadge;
	
	LevelBadge.prototype.preload = function(){
    
	};
	
	LevelBadge.prototype.addText = function () {
		this.label = TextFactory.make(this.options.bounds.x + 40, this.options.bounds.y + 10, ""+this.options.index);
		this.group.add(this.label);
	};
	
	LevelBadge.prototype.select = function () {
		this.mouseUpSignal.dispatch({"target":this});
	};
	
	LevelBadge.prototype.addDecor = function () {
		
	};
	
	LevelBadge.prototype.getAsset = function () {
		if(!this.unlocked){
			return 'levelbuttonlocked';
		}
		else{
			if(this.done){
				return 'levelbuttondone';
			}
			else{
				return 'levelbutton';
			}
		}
	};
	
	LevelBadge.prototype.addMain = function () {
		this.button = new LevelsButton({"x":this.options.bounds.x, "y":this.options.bounds.y, "asset":this.getAsset()});
		this.button.create();
		this.button.mouseUpSignal.add(this.select, this);
		console.log(this.button+"  "+this.button.sprite);
		this.group.add(this.button.sprite);
	};
	
	LevelBadge.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addMain();
		this.addDecor();
		this.addText();
	};
	
	return LevelBadge;
	
});
	







