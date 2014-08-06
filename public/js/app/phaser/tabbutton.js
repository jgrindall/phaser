
define(function(require, exports){
	
	var AbstractButton = require('app/phaser/abstractbutton');

	var TabButton = function(game){
		// overFrame, outFrame, downFrame, upFrame
		AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
	};
	
	TabButton.prototype = Object.create(AbstractButton.prototype);
	TabButton.prototype.constructor = TabButton;

	TabButton.prototype.preload = function(){
		AbstractButton.prototype.preload.apply(this, arguments);
	}

	TabButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	TabButton.prototype.select = function(){
		this.goToFrame(2);
	};

	TabButton.prototype.deselect = function(){
		this.goToFrame(1);
	};
	
	return TabButton;

});







