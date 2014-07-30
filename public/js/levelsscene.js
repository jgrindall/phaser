app.LevelsScene  = function(key, game){
	app.Scene.call(this, key, game);
};

app.LevelsScene.prototype = Object.create(app.Scene.prototype);
app.LevelsScene.prototype.constructor = app.GameScene;

app.LevelsScene.prototype.preload = function() {
	app.Scene.prototype.preload.call(this);
};

app.LevelsScene.prototype.create = function() {
	app.Scene.prototype.create.apply(this, arguments);
	this.group = new app.ButtonGroup(this.game);
	this.group.create();
	this.group.levelSelectSignal.add(this.levelSelect, this);
	var style = {font: "65px Arial", fill: "#ff0044", align: "center" };
	this.text = this.game.add.text(this.game.world.centerX - 300, 0, "Choose a level", style);
};

app.LevelsScene.prototype.levelSelect = function(data) {
	this.navigationSignal.dispatch({"key":this.key, "index":data.index});
};

app.LevelsScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
};

app.LevelsScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
};



