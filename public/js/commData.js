app.CommsData = function(){
	this.level = null;
	this.clear();
	this.selectedIndex = 0;
	this.layoutSignal = new Phaser.Signal();
	this.tabSignal = new Phaser.Signal();
};

app.CommsData.prototype.setSelectedTab = function(data){
	this.selectedIndex = data.index;
	this.tabSignal.dispatch();
};

app.CommsData.prototype.setLevel = function(level){
	this.level = level;
	this.clear();
};

app.CommsData.prototype.clear = function(){
	this.selectedIndex = 0;
	this.tiles = [];
	var that = this;
	if(this.level){
		$.each(Array(this.level.tabs), function(i) {
			that.tiles[i] = [];
		});
	}
};

app.CommsData.prototype.getTilesLayout = function(n){
	var tiles = this.tiles[n];
	var p = [];
	var y = app.CommsData.TOP;
	var x = app.CommsData.XPOS;
	$.each(tiles, function(i, id){
		var obj = {"type":id.type, "index":id.index, "x":x, "y":y};
		p.push(obj);
		y += app.CommsData.HEIGHT;
	});
	return {"index":n, "positions":p};
};

app.CommsData.prototype.layoutCurrentTiles = function(){
	var positions = [];
	positions.push ( this.getTilesLayout(this.selectedIndex) );
	this.layoutSignal.dispatch(positions);
};

app.CommsData.prototype.layoutAllTiles = function(c){
	var that = this, positions = [];
	$.each(this.tiles, function(i){
		var p = that.getTilesLayout(i);
		positions.push(p);
	});
	this.layoutSignal.dispatch(positions);
};

app.CommsData.prototype.log = function(){
	var tiles = this.currentTiles();
	var s = "";
	$.each(tiles, function(i, obj){
		s += "\n"+i+"   "+JSON.stringify(obj);
	});
	console.log("LOG s: " + s);
};

app.CommsData.prototype.currentTiles = function(){
	return this.tiles[this.selectedIndex];
};

app.CommsData.prototype.getDropPosition = function(block){
	var tiles = this.currentTiles();
	if(tiles.length === 0){
		return 0;
	}
	var y = block.sprite.y;
	var middleY = y + (app.CommsData.HEIGHT/2);
	var num = (middleY - app.CommsData.TOP) / app.CommsData.HEIGHT;
	num = Math.floor(num + 0.5);
	num = Math.min(num, tiles.length + 1);
	return num;
};

app.CommsData.prototype.drop = function(block){
	var index = this.getDropPosition(block);
	var tiles = this.currentTiles();
	tiles.splice(index, 0, block.id);
	this.layoutCurrentTiles();
};

app.CommsData.prototype.reload = function(c){
	this.layoutAllTiles(c);
};

app.CommsData.prototype.getIndexOf = function(tiles, id){
	var i = -1;
	$.each(tiles, function(j, obj){
		if(obj.type === id.type && obj.index === id.index){
			i = j;
		}
	});
	return i;
};

app.CommsData.prototype.lift = function(block){
	var id = block.id;
	var tiles = this.currentTiles();
	var index = this.getIndexOf(tiles, block.id);
	tiles.splice(index, 1);
	this.layoutCurrentTiles();
};

app.CommsData.HEIGHT = 120;
app.CommsData.TOP = 60;
app.CommsData.XPOS = 400;

app.commsData = new app.CommsData();

