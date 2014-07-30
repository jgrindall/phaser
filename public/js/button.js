app.AbstractButton = function(game){
	this.game = game;
	this.mouseDownSignal = new Phaser.Signal();
	this.mouseUpSignal = new Phaser.Signal();
};

app.AbstractButton.prototype.preload = function(){
	
}

app.AbstractButton.prototype.create = function(){
	this.sprite = new Phaser.Button(this.game, 0, 0, 'button', null, this, 0, 0, 3, 5);
	this.sprite.events.onInputUp.add(this.mouseUp, this);
	this.sprite.events.onInputDown.add(this.mouseDown, this);
	this.sprite.inputEnabled = true;
};

app.AbstractButton.prototype.mouseUp = function(){
	this.mouseUpSignal.dispatch({target:this});
};

app.AbstractButton.prototype.mouseDown = function(){
	this.mouseDownSignal.dispatch({target:this});
}

app.AbstractButton.prototype.update = function(){
	
};




app.NavButton = function(game){
	app.AbstractButton.call(this, game);
};

app.NavButton.prototype = Object.create(app.AbstractButton.prototype);
app.NavButton.prototype.constructor = app.NavButton;


app.NavButton.prototype.create = function(){
	app.AbstractButton.prototype.create.apply(this, arguments);
};

app.NavButton.prototype.update = function(){
	app.AbstractButton.prototype.update.apply(this, arguments);
};





app.LevelsButton = function(game){
	app.AbstractButton.call(this, game);
};

app.LevelsButton.prototype = Object.create(app.AbstractButton.prototype);
app.LevelsButton.prototype.constructor = app.LevelsButton;

app.LevelsButton.prototype.preload = function(){
	app.AbstractButton.prototype.preload.apply(this, arguments);
}

app.LevelsButton.prototype.create = function(){
	app.AbstractButton.prototype.create.apply(this, arguments);
};

app.LevelsButton.prototype.update = function(){
	app.AbstractButton.prototype.update.apply(this, arguments);
};







