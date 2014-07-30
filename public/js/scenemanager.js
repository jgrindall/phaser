app.SceneManager  = function(){
	
};

app.SceneManager.prototype.registerScenes = function(){
	this.addScene(app.SceneManager.GAME_SCENE, app.GameScene);
	this.addScene(app.SceneManager.COMM_SCENE, app.CommScene);
	this.addScene(app.SceneManager.MAIN_SCENE, app.MainScene);
	this.addScene(app.SceneManager.LEVELS_SCENE, app.LevelsScene);
	this.transitions = this.game.plugins.add(Phaser.Plugin.StateTransition);
	var transOptions = {duration: 1000,	properties: {alpha: 0, scale: {x: 2, y: 2}}};
	this.transitions.settings(transOptions);
};

app.SceneManager.prototype.addScene = function(key, _class) {
	var s = new _class(key, this.game);
	s.navigationSignal.add(this.navigationClicked, this);
	this.game.state.add(key, s);
};

app.SceneManager.prototype.navigationClicked = function(data){
	if(data.key === app.SceneManager.LEVELS_SCENE){
		this.transitions.to(app.SceneManager.COMM_SCENE);
	}
	else if(data.key === app.SceneManager.MAIN_SCENE){
		this.transitions.to(app.SceneManager.LEVELS_SCENE);
	}
	else if(data.key === app.SceneManager.COMM_SCENE){
		this.transitions.to(app.SceneManager.GAME_SCENE);
	}
};

app.SceneManager.prototype.load = function(s) {
	this.game.state.start(s);
};

app.SceneManager.prototype.preload = function(){
	this.game = app.game;
	this.game.load.onFileComplete.add(this.fileLoaded, this);
	this.game.load.spritesheet('button', 'assets/number-buttons-90x90.png', 90, 90);
	this.game.load.image('background', 'assets/background2.png');
};

app.SceneManager.prototype.fileLoaded = function() {
	console.log("fileloaded");
};

app.SceneManager.prototype.create = function() {
	var _this = this;
	this.registerScenes();
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.physics.arcade.gravity.y = 900;
	this.load(app.SceneManager.MAIN_SCENE);
};

app.SceneManager.GAME_SCENE = "gameScene";
app.SceneManager.COMM_SCENE = "commScene";
app.SceneManager.MAIN_SCENE = "mainScene";
app.SceneManager.LEVELS_SCENE = "levelsScene";
