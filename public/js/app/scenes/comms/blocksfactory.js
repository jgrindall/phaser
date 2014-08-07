define(function(require, exports){

	var Block = require('app/scenes/comms/block');
	
	var BlockTypes = function(){
	
	};

	BlockTypes.create = function(type, game){
		if(type == 0){
			return new Block(game, 0, 'block0');
		}
		else{
			return new Block(game, 1, 'block1');
		}
	};
	
	return BlockTypes;
	
});




