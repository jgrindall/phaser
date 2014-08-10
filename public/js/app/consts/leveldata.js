
define([], function(){
	
	var LevelData = function(){
	
	};
	
	LevelData.getIndents = function(type){
		return (LevelData.INDENTS_TYPES.indexOf(type) >= 0);
	};
	
	LevelData.getUnindents = function(type){
		return (LevelData.UNINDENTS_TYPES.indexOf(type) >= 0);
	};
	
	LevelData.TILE_TYPE_FD = 		0;
	LevelData.TILE_TYPE_BACK = 		1
	LevelData.TILE_TYPE_RPT = 		2;
	LevelData.TILE_TYPE_ENDRPT = 	3;
	LevelData.TILE_TYPE_JUMPBACK = 	4;
	LevelData.TILE_TYPE_REPEAT2 = 	5;
	LevelData.TILE_TYPE_REPEAT3 = 	6;
	LevelData.TILE_TYPE_REPEAT4 = 	7;
	LevelData.TILE_TYPE_REPEAT5 = 	8;
	LevelData.TILE_TYPE_FN1 = 		9;
	LevelData.TILE_TYPE_FN2 = 		10;
	LevelData.TILE_TYPE_FN3 = 		11;
	
	LevelData.INDENTS_TYPES = 		[2];
	LevelData.UNINDENTS_TYPES = 	[3];
	
	LevelData.BLOCK0 = "assets/images/block0.png";
	LevelData.BLOCK1 = "assets/images/block1.png";
	LevelData.BLOCK2 = "assets/images/block2.png";
	LevelData.BLOCK3 = "assets/images/block3.png";

	LevelData.BLOCK = [LevelData.BLOCK0, LevelData.BLOCK1];

	LevelData.LEVEL0 = {"tiles": [3, 4, 3, 3], "tabs":3};
	LevelData.LEVEL1 = {"tiles": [2, 2, 3, 3], "tabs":2};

	LevelData.LEVELS = [LevelData.LEVEL0, LevelData.LEVEL1];
		
	return LevelData;

});






