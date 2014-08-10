
define(['app/components/buttons/abstractbutton'], function(AbstractButton){
	
	var MarkerButton = function(){
		AbstractButton.call(this, 'marker');
	};

	MarkerButton.prototype = Object.create(AbstractButton.prototype);
	MarkerButton.prototype.constructor = MarkerButton;

	MarkerButton.prototype.preload = function(){
		AbstractButton.prototype.preload.apply(this, arguments);
	}
	
	MarkerButton.prototype.select = function(){
		this.goToFrame(2);
	};

	MarkerButton.prototype.deselect = function(){
		this.goToFrame(1);
	};
	
	MarkerButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};
	
	return MarkerButton;

});









