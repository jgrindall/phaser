
define(['app/components/buttons/abstractbutton'],function(AbstractButton){
	
	"use strict";
	
	var TabButton = function(options){
		options.asset = 'tabbutton';
		AbstractButton.call(this, options);
	};
	
	TabButton.WIDTH = 244;
	TabButton.HEIGHT = 52;
	
	TabButton.prototype = Object.create(AbstractButton.prototype);
	TabButton.prototype.constructor = TabButton;

	TabButton.prototype.preload = function(){
		AbstractButton.prototype.preload.apply(this, arguments);
	}

	TabButton.prototype.create = function(){
		AbstractButton.prototype.create.apply(this, arguments);
	};

	TabButton.prototype.select = function(){
		this.goToFrame(1);
	};

	TabButton.prototype.deselect = function(){
		this.goToFrame(0);
	};
	
	return TabButton;

});







