
define(function(require, exports){
	
	var AbstractButton = require('app/components/buttons/abstractbutton');

	var LevelsButton = function(game){
		AbstractButton.call(this, game, 'button', [0, 1, 2, 3]);
	};

	LevelsButton.prototype = Object.create(AbstractButton.prototype);
	LevelsButton.prototype.constructor = LevelsButton;

	LevelsButton.prototype.preload = function(){
		AbstractButton.prototype.preload.apply(this, arguments);
	}

	LevelsButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};
	
	return LevelsButton;

});









