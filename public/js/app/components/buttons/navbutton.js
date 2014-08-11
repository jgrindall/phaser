
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	NavButton = function(options){
		options.asset = 'play';
		AbstractButton.call(this, options);
	};
	
	NavButton.prototype = Object.create(AbstractButton.prototype);
	NavButton.prototype.constructor = NavButton;

	return NavButton;
	
});

