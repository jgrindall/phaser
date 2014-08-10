
define(['app/consts/leveldata', 'app/game'], function(LevelData, Game){
	
	var Preloader = function(){
		this.numLoaded = 0;
		this.loadSignal = new Phaser.Signal();
	};

	Preloader.BG_KEY = 'background';
	Preloader.SOUND1_KEY = 'sound1';
	Preloader.SOUND2_KEY = 'sound2';
	Preloader.SOUND3_KEY = 'sound3';
	Preloader.SOUND4_KEY = 'sound4';
	Preloader.SOUND5_KEY = 'sound5';
	Preloader.MARKER_KEY = 'marker';
	Preloader.BLOCK_KEY0 = 'block0';
	Preloader.BLOCK_KEY1 = 'block1';
	Preloader.BLOCK_KEY2 = 'block2';
	Preloader.BLOCK_KEY3 = 'block3';
	Preloader.DUDE_KEY = 'dude';
	Preloader.STAR_KEY = 'star';
	Preloader.LEVEL1_JSON_KEY = 'level1';
	Preloader.LEVEL1_TILES_KEY = 'tiles1';

	Preloader.data = [
		{"type":"sound", 		"asset":"assets/sound/sound1.mp3", 			"key":Preloader.SOUND1_KEY},
		{"type":"sound", 		"asset":"assets/sound/sound2.mp3", 			"key":Preloader.SOUND2_KEY},
		{"type":"sound", 		"asset":"assets/sound/sound3.mp3", 			"key":Preloader.SOUND3_KEY},
		{"type":"image", 		"asset":"assets/images/background2.png", 	"key":Preloader.BG_KEY},
		{"type":"image", 		"asset":LevelData.BLOCK0, 					"key":Preloader.BLOCK_KEY0},
		{"type":"image", 		"asset":LevelData.BLOCK1, 					"key":Preloader.BLOCK_KEY1},
		{"type":"image", 		"asset":LevelData.BLOCK2, 					"key":Preloader.BLOCK_KEY2},
		{"type":"image", 		"asset":LevelData.BLOCK3, 					"key":Preloader.BLOCK_KEY3},
		{"type":"spritesheet", 	"asset":"assets/images/dude.png", 			"key":Preloader.DUDE_KEY, 			"w":32, 	"h":48},
		{"type":"image", 		"asset":"assets/images/star2.png", 			"key":Preloader.STAR_KEY},
		{"type":"tilemap", 		"asset":"assets/levels/level1.json", 		"key":Preloader.LEVEL1_JSON_KEY},
		{"type":"image", 		"asset":"assets/images/tiles1.png",	 		"key":Preloader.LEVEL1_TILES_KEY},
		{"type":"spritesheet", 	"asset":"assets/images/droid.png", 			"key":Preloader.MARKER_KEY, 		"w":32, 	"h":32}
	];
	
	Preloader.prototype.loadNext = function(){
		var obj, type, game;
		game = Game.getInstance();
		obj = Preloader.data[this.numLoaded];
		type = obj.type;
		if(type === "image"){
			game.load.image(obj.key, obj.asset);
		}
		else if(type === "spritesheet"){
			game.load.spritesheet(obj.key, obj.asset, obj.w, obj.h);
		}
		else if(type === "tilemap"){
			game.load.tilemap(obj.key, obj.asset, null, Phaser.Tilemap.TILED_JSON);
		}
		else if(type === "sound"){
			game.load.audio(obj.key, [obj.asset]);
		}
	};
	
	Preloader.prototype.start = function(){
		var game = Game.getInstance();
		game.load.onFileComplete.add($.proxy(this.fileLoaded, this));
		this.loadNext();
	};

	Preloader.prototype.fileLoaded = function() {
		this.numLoaded++;
		this.loadSignal.dispatch({"numLoaded":this.numLoaded, "total":Preloader.data.length});
		if(this.numLoaded < Preloader.data.length){
			this.loadNext();
		}
	};

	return Preloader;

});





