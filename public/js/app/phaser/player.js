
define(function(require, exports){
	
	var Character = require('app/phaser/character');
	
	var Player = function(game){
		Character.call(this, game);
	};

	Player.prototype = Object.create(Character.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.preload = function(){
		Character.prototype.preload.call(this, game);
	};

	Player.prototype.makeSprite = function () {
		Character.prototype.makeSprite.call(this, arguments);
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

	Player.prototype.create = function () {
		Character.prototype.create.call(this, arguments);
	};

	Player.prototype.update = function() {
	    Character.prototype.update.call(this, arguments);
	};
	
	return Player;
});
	
