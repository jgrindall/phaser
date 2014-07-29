
app.GameScene  = function(key, game){
	app.Scene.call(this, key, game);
	this.player = new app.Player(this.game);
	this.platforms = new app.Platforms(this.game);
	this.stars = new app.Stars(this.game);
	this.bg = new app.Bg(this.game);
	this.button = new app.Button(this.game);
	this.commandStack = ["UR", "UL", "U","U", "R", "R", "L", "R", "R", "U", "UR"];
	this.commandNum = -1;
};

app.GameScene.prototype = Object.create(app.Scene.prototype);
app.GameScene.prototype.constructor = app.GameScene;

app.GameScene.prototype.preload = function() {
	app.Scene.prototype.preload.apply(this, arguments);
	this.player.preload();
	this.button.preload();
	this.bg.preload();
	this.platforms.preload();
	this.stars.preload();
};

app.GameScene.prototype.nextCommand = function() {
	this.commandNum++;
	if(this.commandNum == this.commandStack.length){
		// end
	}
	else{
		var s = this.commandStack[this.commandNum];
		this.player.setForce(s);
	}
};

app.GameScene.prototype.create = function() {
	app.Scene.prototype.create.apply(this, arguments);
	this.bg.create();
    this.player.create();
	this.platforms.create();
	this.stars.create();
	this.button.create();
	this.button.clicker.add(this.buttonClicked, this);
	this.game.camera.follow(this.player.sprite);
};

app.GameScene.prototype.buttonClicked = function(data) {
	this.navigationSignal.dispatch({"key":this.key});
};

app.GameScene.prototype.update = function() {
	app.Scene.prototype.update.apply(this, arguments);
    this.game.physics.arcade.collide(this.player.sprite, this.platforms.layer);
	this.game.physics.arcade.collide(this.stars.body, this.platforms.layer);
	this.game.physics.arcade.overlap(this.player.sprite, this.stars.body, this.collectStar, null, this);
	this.player.update();
	this.platforms.update();
	this.stars.update();
	//this.checkStill();
};

app.GameScene.prototype.checkStill = function(){
	var _this = this;
	if(this.player.isStill()){
		if(!this.still){
			this.still = true;
			if(this.checkEndTimeout){
				clearTimeout(this.checkEndTimeout);
			}
			this.checkEndTimeout = setTimeout(function(){
				_this.nextCommand();
			}, 500);
		}
	}
	else{
		this.still = false;
	}
};

app.GameScene.prototype.collectStar = function(player, star){
	star.kill();
};

app.GameScene.prototype.shutdown = function() {
	app.Scene.prototype.shutdown.apply(this, arguments);
};