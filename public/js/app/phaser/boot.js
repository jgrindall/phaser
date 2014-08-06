define(function(require, exports) {
	
	var SceneManager = require('app/phaser/scenemanager');
	var Implementations = require('app/phaser/implementations');
	
   	var Boot = function ( ){

    };
	
	Boot.launch = function(){
		var sceneManager, config;
		sceneManager = new SceneManager();
		config = {
			"create":$.proxy(sceneManager.create, sceneManager),
			"preload":$.proxy(sceneManager.preload, sceneManager)
		};
		app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', config);
		
	};
	
	
	Boot.start = function(){
		$(document).ready(Boot.launch);
	};
	
	
	return Boot;
});



