define(function(require, exports) {
	
	var CommsData = function(){
		this.level = null;
		this.clear();
		this.selectedIndex = 0;
		this.layoutSignal = new Phaser.Signal();
		this.tabSignal = new Phaser.Signal();
	};

	CommsData.prototype.setSelectedTab = function(data){
		this.selectedIndex = data.index;
		this.tabSignal.dispatch();
	};

	CommsData.prototype.setLevel = function(level){
		this.level = level;
		this.clear();
	};

	CommsData.prototype.clear = function(){
		this.selectedIndex = 0;
		this.tiles = [];
		var that = this;
		if(this.level){
			$.each(Array(this.level.tabs), function(i) {
				that.tiles[i] = [];
			});
		}
	};

	CommsData.prototype.getTilesLayout = function(n){
		var tiles = this.tiles[n];
		var p = [];
		var y = CommsData.TOP;
		var x = CommsData.XPOS;
		$.each(tiles, function(i, id){
			var obj = {"type":id.type, "index":id.index, "x":x, "y":y};
			p.push(obj);
			y += CommsData.HEIGHT;
		});
		return {"index":n, "positions":p};
	};
	
	CommsData.prototype.getCommands = function(){
		return ["UR", "UL", "U","U", "R", "R", "L", "R", "R", "U", "UR"];
	};
	
	CommsData.prototype.layoutCurrentTiles = function(){
		var positions = [];
		positions.push ( this.getTilesLayout(this.selectedIndex) );
		this.layoutSignal.dispatch(positions);
	};

	CommsData.prototype.layoutAllTiles = function(c){
		var that = this, positions = [];
		$.each(this.tiles, function(i){
			var p = that.getTilesLayout(i);
			positions.push(p);
		});
		this.layoutSignal.dispatch(positions);
	};

	CommsData.prototype.log = function(){
		var tiles = this.currentTiles();
		var s = "";
		$.each(tiles, function(i, obj){
			s += "\n"+i+"   "+JSON.stringify(obj);
		});
		console.log("LOG s: " + s);
	};

	CommsData.prototype.currentTiles = function(){
		return this.tiles[this.selectedIndex];
	};

	CommsData.prototype.getDropPosition = function(block){
		var tiles = this.currentTiles();
		if(tiles.length === 0){
			return 0;
		}
		var y = block.sprite.y;
		var middleY = y + (CommsData.HEIGHT/2);
		var num = (middleY - CommsData.TOP) / CommsData.HEIGHT;
		num = Math.floor(num + 0.5);
		num = Math.min(num, tiles.length + 1);
		return num;
	};

	CommsData.prototype.drop = function(block){
		var index = this.getDropPosition(block);
		var tiles = this.currentTiles();
		tiles.splice(index, 0, block.id);
		this.layoutCurrentTiles();
	};

	CommsData.prototype.reload = function(c){
		this.layoutAllTiles(c);
	};

	CommsData.prototype.getIndexOf = function(tiles, id){
		var i = -1;
		$.each(tiles, function(j, obj){
			if(obj.type === id.type && obj.index === id.index){
				i = j;
			}
		});
		return i;
	};

	CommsData.prototype.lift = function(block){
		var id = block.id;
		var tiles = this.currentTiles();
		var index = this.getIndexOf(tiles, block.id);
		tiles.splice(index, 1);
		this.layoutCurrentTiles();
	};

	CommsData.HEIGHT = 120;
	CommsData.TOP = 60;
	CommsData.XPOS = 400;

  	return new CommsData();
});




