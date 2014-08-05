var app = {};



Phaser.Group.prototype.hitTest = function(input){
	var hits = false;
	var pointer = input.activePointer;
	// TODO - check if alive
	this.forEach(function(child){
		var localPoint = input.getLocalPosition(child, pointer);
		if(input.hitTest(child, pointer, localPoint)){
			hits = true;
		}
	});
	return hits;
};
