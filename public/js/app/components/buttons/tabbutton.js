
define(['app/components/buttons/abstractbutton'],function(AbstractButton){
	
	"use strict";
	
	var TabButton = function(options){
		options.asset = 'play';
		// overFrame, outFrame, downFrame, upFrame
		AbstractButton.call(this, options);
	};
	
	TabButton.WIDTH = 120;
	
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







