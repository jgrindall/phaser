app.AbstractButton = function(game, asset, frames){
	this.game = game;
	this.asset = asset;
	this.frames = frames;
	this.mouseDownSignal = new Phaser.Signal();
	this.mouseUpSignal = new Phaser.Signal();
};

app.AbstractButton.prototype.preload = function(){
	
}

app.AbstractButton.prototype.goToFrame = function(i){
	this.sprite.setFrames(this.frames[i], this.frames[i], this.frames[i], this.frames[i]);
};

app.AbstractButton.prototype.resetFrames = function(i){
	this.sprite.setFrames(this.frames[0], this.frames[1], this.frames[2], this.frames[3]);
};

app.AbstractButton.prototype.callback = function(){

};

app.AbstractButton.prototype.create = function(){
	//game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
	this.sprite = new Phaser.Button(this.game, 0, 0, this.asset, this.callback, this, this.frames[0], this.frames[1], this.frames[2], this.frames[3]);
	this.sprite.events.onInputUp.add(this.mouseUp, this);
	this.sprite.events.onInputDown.add(this.mouseDown, this);
	this.sprite.inputEnabled = true;
	this.resetFrames();
};

app.AbstractButton.prototype.mouseUp = function(){
	this.mouseUpSignal.dispatch({"target":this});
};

app.AbstractButton.prototype.mouseDown = function(){
	this.mouseDownSignal.dispatch({"target":this});
}

app.AbstractButton.prototype.update = function(){
	
};




app.NavButton = function(game){
	app.AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
};

app.NavButton.prototype = Object.create(app.AbstractButton.prototype);
app.NavButton.prototype.constructor = app.NavButton;


app.NavButton.prototype.create = function(){
	app.AbstractButton.prototype.create.apply(this, arguments);
};




///




app.LevelsButton = function(game){
	app.AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
};

app.LevelsButton.prototype = Object.create(app.AbstractButton.prototype);
app.LevelsButton.prototype.constructor = app.LevelsButton;

app.LevelsButton.prototype.preload = function(){
	app.AbstractButton.prototype.preload.apply(this, arguments);
}

app.LevelsButton.prototype.create = function(){
	app.AbstractButton.prototype.create.apply(this, arguments);
};




///




app.TabButton = function(game){
	// overFrame, outFrame, downFrame, upFrame
	app.AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
};

app.TabButton.prototype = Object.create(app.AbstractButton.prototype);
app.TabButton.prototype.constructor = app.LevelsButton;

app.TabButton.prototype.preload = function(){
	app.AbstractButton.prototype.preload.apply(this, arguments);
}

app.TabButton.prototype.create = function(){
	app.AbstractButton.prototype.create.apply(this, arguments);
};

app.TabButton.prototype.select = function(){
	this.goToFrame(2);
};

app.TabButton.prototype.deselect = function(){
	this.goToFrame(1);
};







