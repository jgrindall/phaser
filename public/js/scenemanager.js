


//////////////


app.SceneManager  = function(){
	
};

app.SceneManager.prototype.registerScenes = function(){
	this.addScene(app.SceneManager.GAME_SCENE, app.GameScene);
	this.addScene(app.SceneManager.COMM_SCENE, app.CommScene);
	this.addScene(app.SceneManager.MAIN_SCENE, app.MainScene);
	this.addScene(app.SceneManager.LEVELS_SCENE, app.LevelsScene);
	this.transitions = this.game.plugins.add(Phaser.Plugin.StateTransition);
	var transOptions = {duration: 1500,	properties: {alpha: 0, scale: {x: 1.1, y: 1.1}}};
	this.transitions.settings(transOptions);
};

app.SceneManager.prototype.addScene = function(key, _class) {
	var s = new _class(key, this.game);
	s.navigationSignal.add(this.navigationClicked, this);
	this.game.state.add(key, s);
};

app.SceneManager.prototype.navigationClicked = function(data){
	if(data.key === app.SceneManager.LEVELS_SCENE){
		var level = app.LevelData.LEVELS[data.index];
		app.commsData.setLevel(level);
		this.transitions.to(app.SceneManager.COMM_SCENE);
	}
	else if(data.key === app.SceneManager.MAIN_SCENE){
		this.transitions.to(app.SceneManager.LEVELS_SCENE);
	}
	else if(data.key === app.SceneManager.COMM_SCENE){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 900;
		this.transitions.to(app.SceneManager.GAME_SCENE);
	}
	else if(data.key === app.SceneManager.GAME_SCENE){
		this.transitions.to(app.SceneManager.COMM_SCENE);
	}
};

app.SceneManager.prototype.preload = function(){
	this.game = app.game;
	this.game.load.spritesheet('button', 'assets/startButton.png', 90, 90);
};

app.SceneManager.prototype.load = function(s) {
	console.log("start! "+s);
	this.game.state.start(s);
};

app.SceneManager.prototype.create = function() {
	console.log("create SM");
	this.registerScenes();
	this.load(app.SceneManager.MAIN_SCENE);
};

app.SceneManager.GAME_SCENE = "gameScene";
app.SceneManager.COMM_SCENE = "commScene";
app.SceneManager.MAIN_SCENE = "mainScene";
app.SceneManager.LEVELS_SCENE = "levelsScene";
