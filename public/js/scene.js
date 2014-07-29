app.Scene  = function(key, game){
	this.game = game;
	this.key = key;
	this.navigationSignal = new Phaser.Signal();
};

app.Scene.prototype.preload = function() {
	
};

app.Scene.prototype.create = function() {
	
};

app.Scene.prototype.update = function() {
    
};

app.Scene.prototype.shutdown = function() {
	console.log("shutdown scene //TODO - tidy up");
};