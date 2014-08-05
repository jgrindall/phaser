
app.Player = function(game){
	app.Character.call(this, game);
};

app.Player.prototype = Object.create(app.Character.prototype);
app.Player.prototype.constructor = app.Player;

app.Player.prototype.preload = function(){
	app.Character.prototype.preload.call(this, game);
};

app.Player.prototype.makeSprite = function () {
	app.Character.prototype.makeSprite.call(this, arguments);
    this.sprite = this.game.add.sprite(32, 32, 'dude');
	this.sprite.enableBody = true;
	this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	var body = this.sprite.body;
    body.bounce.y = 0.2;
    body.gravity.y = 20;
	body.velocity.y = -5;
    body.collideWorldBounds = true;
    this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
    this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
	this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

app.Player.prototype.create = function () {
	app.Character.prototype.create.call(this, arguments);
};

app.Player.prototype.update = function() {
    app.Character.prototype.update.call(this, arguments);
};


