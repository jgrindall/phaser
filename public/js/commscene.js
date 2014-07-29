app.CommScene  = function(key, game){
	app.Scene.call(this, key, game);
	this.button = new app.Button(this.game);
	this.comms = new app.Comms(this.game);
};

app.CommScene.prototype = Object.create(app.Scene.prototype);
app.CommScene.prototype.constructor = app.GameScene;

app.CommScene.prototype.preload = function() {
	app.Scene.prototype.preload.call(this);
	this.button.preload();
	this.comms.preload();
};

app.CommScene.prototype.create = function() {
	app.Scene.prototype.create.apply(this, arguments);
	this.button.create();
	this.comms.create();
	this.button.clicker.add(this.buttonClicked, this);
};

app.CommScene.prototype.buttonClicked = function(data) {
	this.navigationSignal.dispatch({"key":this.key});
};

app.CommScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
};

app.CommScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
};