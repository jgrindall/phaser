
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	var LevelsButton = function(options){
		options.asset = 'play';
		AbstractButton.call(this, options);
	};

	LevelsButton.prototype = Object.create(AbstractButton.prototype);
	LevelsButton.prototype.constructor = LevelsButton;
	
	LevelsButton.WIDTH = 120;
	LevelsButton.HEIGHT = 120;
	
	return LevelsButton;

});









