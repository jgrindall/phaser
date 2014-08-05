app.Preloader = function(game){
	this.game = game;
	this.numLoaded = 0;
	this.loadSignal = new Phaser.Signal();
};

app.Preloader.prototype.start = function(){
	console.log("start !!");
	var game = this.game;
	game.load.onFileComplete.add($.proxy(this.fileLoaded, this));
	$.each(app.Preloader.data, function(i, obj){
		var type = obj.type;
		if(type === "image"){
			game.load.image(obj.key, obj.asset);
		}
		else if(type === "spritesheet"){
			game.load.spritesheet(obj.key, obj.asset, obj.w, obj.h);
		}
		else if(type === "tilemap"){
			game.load.tilemap(obj.key, obj.asset, null, Phaser.Tilemap.TILED_JSON);
		}
	});
};

app.Preloader.prototype.fileLoaded = function() {
	this.numLoaded++;
	this.loadSignal.dispatch({"numLoaded":this.numLoaded, "total":app.Preloader.data.length});
};

app.Preloader.BG_KEY = 'background';
app.Preloader.BLOCK_KEY0 = 'block0';
app.Preloader.BLOCK_KEY1 = 'block1';
app.Preloader.DUDE_KEY = 'dude';
app.Preloader.STAR_KEY = 'star';
app.Preloader.LEVEL1_JSON_KEY = 'level1';
app.Preloader.LEVEL1_TILES_KEY = 'tiles1';

app.Preloader.data = [
	{"type":"image", 		"asset":"assets/background2.png", 		"key":app.Preloader.BG_KEY},
	{"type":"image", 		"asset":app.LevelData.BLOCK0, 			"key":app.Preloader.BLOCK_KEY0},
	{"type":"image", 		"asset":app.LevelData.BLOCK1, 			"key":app.Preloader.BLOCK_KEY1},
	{"type":"spritesheet", 	"asset":"assets/dude.png", 				"key":app.Preloader.DUDE_KEY, 			"w":32, 	"h":48},
	{"type":"image", 		"asset":"assets/star2.png", 			"key":app.Preloader.STAR_KEY},
	{"type":"tilemap", 		"asset":"assets/level1.json", 			"key":app.Preloader.LEVEL1_JSON_KEY},
	{"type":"image", 		"asset":"assets/tiles1.png",	 		"key":app.Preloader.LEVEL1_TILES_KEY}
];
