

app.MainScene  = function(key, game){
	app.Scene.call(this, key, game);
	this.numLoaded = 0;
};

app.MainScene.prototype = Object.create(app.Scene.prototype);
app.MainScene.prototype.constructor = app.GameScene;

app.MainScene.prototype.preload = function() {
	this.preloadLabel = this.game.add.text(this.game.world.centerX - 300, 50, "Loaded 0%", {font: "65px Arial", fill: "#ff0044", align: "center"});
	this.preloader = new app.Preloader(this.game);
	this.preloader.loadSignal.add(this.loadProgress, this);
	this.preloader.start();
};

app.MainScene.prototype.loadProgress = function(data) {
	var p = Math.round(data.numLoaded * 100 / data.total);
	this.preloadLabel.text = "Loaded "+p+"%";
};

app.MainScene.prototype.create = function() {
	this.startButton = new app.NavButton(this.game);
	this.tutorialButton = new app.NavButton(this.game);
	this.startButton.create();
	this.tutorialButton.create();
	this.game.world.add(this.startButton.sprite);
	this.game.world.add(this.tutorialButton.sprite);
	this.tutorialButton.sprite.x = 100;
	this.startButton.sprite.y = 200;
	this.tutorialButton.sprite.y = 200;
	this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
	this.tutorialButton.mouseUpSignal.add(this.tutorialButtonClicked, this);
	this.label = this.game.add.text(this.game.world.centerX - 300, 0, "Main menu", { font: "35px Arial", fill: "#ffff44", align: "center" });
};

app.MainScene.prototype.startButtonClicked = function(data) {
	this.navigationSignal.dispatch({"key":this.key});
};

app.MainScene.prototype.tutorialButtonClicked = function(data) {
	this.navigationSignal.dispatch({"key":this.key});
};

app.MainScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
};

app.MainScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
};

