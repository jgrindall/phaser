app.MainScene  = function(key, game){
	app.Scene.call(this, key, game);
};

app.MainScene.prototype = Object.create(app.Scene.prototype);
app.MainScene.prototype.constructor = app.GameScene;

app.MainScene.prototype.preload = function() {
	app.Scene.prototype.preload.call(this);
};

app.MainScene.prototype.create = function() {
	app.Scene.prototype.create.apply(this, arguments);
	this.button = new app.NavButton(this.game);
	this.button.create();
	this.game.world.add(this.button.sprite);
	this.button.mouseUpSignal.add(this.buttonClicked, this);
	var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
	var t = this.game.add.text(this.game.world.centerX - 300, 0, "Main menu", style);
};

app.MainScene.prototype.buttonClicked = function(data) {
	this.navigationSignal.dispatch({"key":this.key});
};

app.MainScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
	//this.button.update();
};

app.MainScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
};