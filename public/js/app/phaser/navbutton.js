
define(function(require, exports){
	
	var AbstractButton = require('app/phaser/abstractbutton');
	var AbstractButton = require('app/phaser/abstractbutton');
	
	
	NavButton = function(game){
		AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
	};
	
	NavButton.prototype = Object.create(AbstractButton.prototype);
	NavButton.prototype.constructor = NavButton;


	NavButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	return NavButton;
	
});

