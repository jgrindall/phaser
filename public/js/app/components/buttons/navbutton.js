
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	NavButton = function(){
		AbstractButton.call(this, 'button');
	};
	
	NavButton.prototype = Object.create(AbstractButton.prototype);
	NavButton.prototype.constructor = NavButton;


	NavButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	return NavButton;
	
});

