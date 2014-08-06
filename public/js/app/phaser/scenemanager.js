
define(function(require, exports){
	
	var AppConsts = 	require('app/phaser/appconsts');
	var GameScene = 	require('app/phaser/gamescene');
	var CommScene = 	require('app/phaser/commscene');
	var MainScene = 	require('app/phaser/mainscene');
	var LevelsScene = 	require('app/phaser/levelsscene');
	var LevelData = 	require('app/phaser/leveldata');
	var commsData = 	require('app/phaser/commsdata');
	var SceneManager = function(){

	};

	SceneManager.prototype.registerScenes = function(){
		this.addScene(AppConsts.GAME_SCENE, GameScene);
		this.addScene(AppConsts.COMM_SCENE, CommScene);
		this.addScene(AppConsts.MAIN_SCENE, MainScene);
		this.addScene(AppConsts.LEVELS_SCENE, LevelsScene);
	};

	SceneManager.prototype.addScene = function(key, _class) {
		var s = new _class(key, this.game);
		s.navigationSignal.add(this.navigationClicked, this);
		this.game.state.add(key, s);
	};

	SceneManager.prototype.navigationClicked = function(data){
		if(data.key === AppConsts.LEVELS_SCENE){
			var level = LevelData.LEVELS[data.index];
			commsData.setLevel(level);
			this.transitions.to(AppConsts.COMM_SCENE);
		}
		else if(data.key === AppConsts.MAIN_SCENE){
			this.transitions.to(AppConsts.LEVELS_SCENE);
		}
		else if(data.key === AppConsts.COMM_SCENE){
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.physics.arcade.gravity.y = 900;
			this.transitions.to(AppConsts.GAME_SCENE);
		}
		else if(data.key === AppConsts.GAME_SCENE){
			this.transitions.to(AppConsts.COMM_SCENE);
		}
	};

	SceneManager.prototype.preload = function(){
		this.game = app.game;
		this.transitions = this.game.plugins.add(Phaser.Plugin.StateTransition);
		this.transitions.settings({duration: 300,	properties: {alpha: 0, scale: {x: 1.05, y: 1.05}}});
		this.game.load.spritesheet('button', 'assets/startButton.png', 90, 90);
	};

	SceneManager.prototype.load = function(s) {
		this.game.state.start(s);
	};

	SceneManager.prototype.create = function() {
		this.registerScenes();
		this.load(AppConsts.MAIN_SCENE);
	};
	
	return SceneManager;

});
	
	