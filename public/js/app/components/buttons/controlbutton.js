
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	"use strict";
	
	var ControlButton = function(){
		AbstractButton.call(this, 'pause');
	};
	
	ControlButton.HEIGHT = 120;
	
	ControlButton.prototype = Object.create(AbstractButton.prototype);
	ControlButton.prototype.constructor = ControlButton;


	ControlButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	return ControlButton;
	
});

