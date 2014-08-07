
define(function(require, exports){
	
	var LevelData = require('app/consts/leveldata');
	
	var Preloader = function(game){
		this.game = game;
		this.numLoaded = 0;
		this.loadSignal = new Phaser.Signal();
	};

	Preloader.BG_KEY = 'background';
	Preloader.BLOCK_KEY0 = 'block0';
	Preloader.BLOCK_KEY1 = 'block1';
	Preloader.DUDE_KEY = 'dude';
	Preloader.STAR_KEY = 'star';
	Preloader.LEVEL1_JSON_KEY = 'level1';
	Preloader.LEVEL1_TILES_KEY = 'tiles1';

	Preloader.data = [
		{"type":"image", 		"asset":"assets/background2.png", 		"key":Preloader.BG_KEY},
		{"type":"image", 		"asset":LevelData.BLOCK0, 			"key":Preloader.BLOCK_KEY0},
		{"type":"image", 		"asset":LevelData.BLOCK1, 			"key":Preloader.BLOCK_KEY1},
		{"type":"spritesheet", 	"asset":"assets/dude.png", 				"key":Preloader.DUDE_KEY, 			"w":32, 	"h":48},
		{"type":"image", 		"asset":"assets/star2.png", 			"key":Preloader.STAR_KEY},
		{"type":"tilemap", 		"asset":"assets/level1.json", 			"key":Preloader.LEVEL1_JSON_KEY},
		{"type":"image", 		"asset":"assets/tiles1.png",	 		"key":Preloader.LEVEL1_TILES_KEY}
	];

	Preloader.prototype.start = function(){
		var game = this.game;
		game.load.onFileComplete.add($.proxy(this.fileLoaded, this));
		$.each(Preloader.data, function(i, obj){
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

	Preloader.prototype.fileLoaded = function() {
		this.numLoaded++;
		this.loadSignal.dispatch({"numLoaded":this.numLoaded, "total":Preloader.data.length});
	};

	return Preloader;

});





