app.SceneManager  = function(){
	
};

app.SceneManager.prototype.registerScenes = function(){
	this.addScene(app.SceneManager.GAME_SCENE, app.GameScene);
	this.addScene(app.SceneManager.COMM_SCENE, app.CommScene);
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
	if(data.key === app.SceneManager.COMM_SCENE){
		this.transitions.to(app.SceneManager.GAME_SCENE);
	}
	else{
		this.transitions.to(app.SceneManager.COMM_SCENE);
	}
};

app.SceneManager.prototype.load = function(s) {
	this.game.state.start(s);
};

app.SceneManager.prototype.create = function() {
	var _this = this;
	this.game = app.game;
	this.registerScenes();
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.physics.arcade.gravity.y = 900;
	this.load(app.SceneManager.COMM_SCENE);
};

app.SceneManager.GAME_SCENE = "gameScene";
app.SceneManager.COMM_SCENE = "commScene";
