
define(['app/consts/appconsts', 'app/utils/textfactory', 'app/consts/leveldata', 'app/scenemanager/scenefactory', 'app/scenes/comms/commsdata', 'app/game'], function(AppConsts, TextFactory, LevelData, SceneFactory, commsData, Game){
	
	"use strict";
	
	var SceneManager = function(){

	};

	SceneManager.prototype.registerScenes = function(){
		this.addScene(AppConsts.GAME_SCENE);
		this.addScene(AppConsts.COMM_SCENE);
		this.addScene(AppConsts.MAIN_SCENE);
		this.addScene(AppConsts.LEVELS_SCENE);
		this.addScene(AppConsts.TUTORIAL_SCENE);
	};

	SceneManager.prototype.addScene = function(key) {
		var scene = SceneFactory.getForKey(key);
		scene.navigationSignal.add(this.navigationClicked, this);
		Game.getInstance().state.add(key, scene);
	};
	
	SceneManager.prototype.navigationClicked = function(data){
		var level, target;
		if(data.key === AppConsts.LEVELS_SCENE){
			if(data.button === "back"){
				this.transitions.to(AppConsts.MAIN_SCENE);
			}
			else{
				level = LevelData.LEVELS[data.index];
				commsData.setLevel(level);
				Game.startPhysics();
				this.transitions.to(AppConsts.GAME_SCENE);
			}
		}
		else if(data.key === AppConsts.MAIN_SCENE){
			if(data.button === "start"){
				this.transitions.to(AppConsts.LEVELS_SCENE);
			}
			else if(data.button === "tutorial"){
				this.transitions.to(AppConsts.TUTORIAL_SCENE);
			}
		}
		else if(data.key === AppConsts.COMM_SCENE){
			if(data.button === "back"){
				this.transitions.to(AppConsts.LEVELS_SCENE);
			}
			else if(data.button === "go"){
				Game.startPhysics();
				this.transitions.to(AppConsts.GAME_SCENE);
			}
		}
		else if(data.key === AppConsts.TUTORIAL_SCENE){
			this.transitions.to(AppConsts.MAIN_SCENE);
		}
		else if(data.key === AppConsts.GAME_SCENE){
			if(data.target === "comms"){
				this.transitions.to(AppConsts.COMM_SCENE);
			}
			if(data.target === "home"){
				this.transitions.to(AppConsts.MAIN_SCENE);
			}
			if(data.target === "levels"){
				this.transitions.to(AppConsts.LEVELS_SCENE);
			}
		}
	};

	SceneManager.prototype.preload = function(){
		this.transitions = Game.getInstance().plugins.add(Phaser.Plugin.StateTransition);
		this.transitions.settings({duration: 300,	properties: {alpha: 0, scale: {x: 1.05, y: 1.05}}});
		Game.getInstance().load.spritesheet('play', 'assets/images/buttons/yellowPlay.png', 120, 120);
		Game.getInstance().load.spritesheet('bulb', 'assets/images/buttons/yellowBulb.png', 120, 120);
		Game.getInstance().load.spritesheet('pause', 'assets/images/buttons/yellowPause.png', 120, 120);
		Game.getInstance().load.image('sky', 'assets/images/bg/sky.png');
		Game.getInstance().load.spritesheet('loaderBar', 'assets/images/other/bar.png', 500, 60);
		var testLabel = TextFactory.make(Game.getInstance().world.centerX - 300, 0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
	};

	SceneManager.prototype.load = function(s) {
		Game.getInstance().state.start(s);
	};

	SceneManager.prototype.create = function() {
		this.registerScenes();
		this.load(AppConsts.MAIN_SCENE);
	};
	
	return SceneManager;

});
	
	