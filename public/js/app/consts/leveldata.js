
define(function(require, exports){
	
	var LevelData = function(){
	
	};
	
	LevelData.TILE_TYPE_FD = 		0;
	LevelData.TILE_TYPE_BACK = 		1
	LevelData.TILE_TYPE_JUMP = 		2;
	LevelData.TILE_TYPE_JUMPFD = 	3;
	LevelData.TILE_TYPE_JUMPBACK = 	4;
	LevelData.TILE_TYPE_REPEAT2 = 	5;
	LevelData.TILE_TYPE_REPEAT3 = 	6;
	LevelData.TILE_TYPE_REPEAT4 = 	7;
	LevelData.TILE_TYPE_REPEAT5 = 	8;
	LevelData.TILE_TYPE_FN1 = 		9;
	LevelData.TILE_TYPE_FN2 = 		10;
	LevelData.TILE_TYPE_FN3 = 		11;

	LevelData.BLOCK0 = "assets/block0.png";
	LevelData.BLOCK1 = "assets/block1.png";

	LevelData.BLOCK = [LevelData.BLOCK0, LevelData.BLOCK1];

	LevelData.LEVEL0 = {"tiles": [3, 4], "tabs":3};

	LevelData.LEVELS = [LevelData.LEVEL0];
		
	return LevelData;

});






