
define([], function(){
	
	"use strict";
	
	Phaser.Group.prototype.hitTest = function(input){
		var hits = false;
		var pointer = input.activePointer;
		this.forEachAlive(function(child){
			var localPoint = input.getLocalPosition(child, pointer);
			if(input.hitTest(child, pointer, localPoint)){
				hits = true;
			}
		});
		return hits;
	};

});
	
	



