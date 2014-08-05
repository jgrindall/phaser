app.LevelData = function(){
	
};

app.LevelData.TILE_TYPE_FD = 		0;
app.LevelData.TILE_TYPE_BACK = 		1
app.LevelData.TILE_TYPE_JUMP = 		2;
app.LevelData.TILE_TYPE_JUMPFD = 	3;
app.LevelData.TILE_TYPE_JUMPBACK = 	4;
app.LevelData.TILE_TYPE_REPEAT2 = 	5;
app.LevelData.TILE_TYPE_REPEAT3 = 	6;
app.LevelData.TILE_TYPE_REPEAT4 = 	7;
app.LevelData.TILE_TYPE_REPEAT5 = 	8;
app.LevelData.TILE_TYPE_FN1 = 		9;
app.LevelData.TILE_TYPE_FN2 = 		10;
app.LevelData.TILE_TYPE_FN3 = 		11;

app.LevelData.BLOCK0 = "assets/block0.png";
app.LevelData.BLOCK1 = "assets/block1.png";

app.LevelData.BLOCK = [app.LevelData.BLOCK0, app.LevelData.BLOCK1];

app.LevelData.LEVEL0 = {"tiles": [3, 4], "tabs":3};

app.LevelData.LEVELS = [app.LevelData.LEVEL0];