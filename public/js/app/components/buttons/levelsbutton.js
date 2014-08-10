
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	var LevelsButton = function(){
		AbstractButton.call(this, 'button');
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









