app.CommScene  = function(key, game){
	app.Scene.call(this, key, game);
};

app.CommScene.prototype = Object.create(app.Scene.prototype);
app.CommScene.prototype.constructor = app.GameScene;

app.CommScene.prototype.loadLevel = function() {
	this.commands.loadLevel();
	this.tabs.loadLevel();
	this.tabs.init();
};

app.CommScene.prototype.preload = function() {
	app.Scene.prototype.preload.call(this);
};

app.CommScene.prototype.create = function() {
	app.Scene.prototype.create.apply(this, arguments);
	this.button = new app.NavButton(this.game);
	this.commands = new app.Commands(this.game);
	this.tabs = new app.Tabs(this.game);
	this.button.create();
	this.tabs.create();
	this.tabs.group.x = 300;
	this.commands.create();
	this.game.world.add(this.button.sprite);
	this.game.world.add(this.tabs.group);
	this.button.mouseUpSignal.add(this.buttonClicked, this);
	this.tabs.selectSignal.add(this.tabSelected, this);
	this.loadLevel();
};

app.CommScene.prototype.tabSelected = function(data) {
	app.commsData.setSelectedTab(data);
};

app.CommScene.prototype.buttonClicked = function(data) {
	this.navigationSignal.dispatch({"key": this.key});
};

app.CommScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
};

app.CommScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
	this.commands.shutdown();
	this.tabs.shutdown();
};

