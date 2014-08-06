
define(function(require, exports){
	
	var Background = function(game){
		this.game = game;
	};

	Background.prototype.preload = function(){
	
	}

	Background.prototype.create = function(){
		this.sprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
	    this.sprite.fixedToCamera = true;
	};
	
	return Background;

});




