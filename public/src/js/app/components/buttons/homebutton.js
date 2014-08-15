
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	"use strict";
	
	var HomeButton = function(options){
		options.asset = 'homebutton';
		AbstractButton.call(this, options);
	};
	
	HomeButton.prototype = Object.create(AbstractButton.prototype);
	HomeButton.prototype.constructor = HomeButton;

	return HomeButton;
	
});

