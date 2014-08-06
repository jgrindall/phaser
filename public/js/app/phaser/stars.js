define(function(require, exports){
	
	var Stars = function(game){
		this.game = game;
	};

	Stars.prototype.preload = function(){
	
	};

	Stars.prototype.create = function () {
		this.body = this.game.add.group();
		this.game.physics.enable(this.body, Phaser.Physics.ARCADE);
		this.body.enableBody = true;
	    var star = this.body.create(200, 0, 'star');
		star.body.bounce.y = 0.1;
	};

	Stars.prototype.update = function() {
    
	};
	
	return Stars;
	
});

