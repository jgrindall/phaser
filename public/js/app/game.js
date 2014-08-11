
define([],function(){
	
	"use strict";
	
	var Game = function(){
		
	};
	
	Game.GRAVITY = 1000;
	
	Game.init = function(config){
		Game.config = config;
		Game.pauseSignal = new Phaser.Signal();
		Game.getInstance();
	};
	
	Game.getPhysics = function(){
		return Game.getInstance().physics.arcade;
	};
	
	Game.getInput = function(){
		return Game.getInstance().input;
	};
	
	Game.unPausePhysics = function(){
		if(Game.physicsPaused){
			Game.physicsPaused = false;
			Game.pauseSignal.dispatch();
		}
	};
	
	Game.pausePhysics = function(){
		if(!Game.physicsPaused){
			Game.physicsPaused = true;
			Game.pauseSignal.dispatch();
		}
	};
	
	Game.startPhysics = function(){
		if(!Game.physicsStarted){
			Game.physicsPaused = false;
			Game.getInstance().physics.startSystem(Phaser.Physics.ARCADE);
			Game.getPhysics().gravity.y = Game.GRAVITY;
		}
		else{
			Game.unpausePhysics();
		}
	};
	
	Game.getWidth = function(){
		return Math.min(1024, document.body.offsetWidth);
	};
	
	Game.getHeight = function(){
		return Math.min(768, document.body.offsetHeight);
	};
	
	Game.create = function(){
		var w, h;
		w = Game.getWidth();
    	h = Game.getHeight();
		Game.instance = new Phaser.Game(w, h, Phaser.AUTO, 'game', Game.config)
	};
	
	Game.getInstance = function(){
		if(!Game.instance){
			Game.create();
		}
		return Game.instance;
	};
	
	return Game;
	
});

