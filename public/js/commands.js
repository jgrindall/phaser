
app.Commands = function(game){
	this.game = game;
	this.mainGroup = null;
	this.targetGroups = [];
	app.commsData.layoutSignal.add(this.onLayout, this);
	app.commsData.tabSignal.add(this.onSelectTab, this);
};

app.Commands.prototype.onSelectTab = function(){
	var index = app.commsData.selectedIndex;
	$.each(this.targetGroups, function(i, group){
		group.visible = (i === index);
	});
	this.currentGroup = this.targetGroups[index];
};

app.Commands.prototype.onLayoutGroup = function(obj){
	var that = this;
	$.each(obj.positions, function(j, pos){
		var block, sprite, index;
		block = that.getBlockByIndexAndType(pos.index, pos.type);
		sprite = block.sprite;
		index = that.mainGroup.getIndex(sprite);
		if(index >= 0){
			// it's in the mainGroup
			that.mainGroup.remove(sprite);
			that.targetGroups[obj.index].add(sprite);
		}
		sprite.x = pos.x;
		sprite.y = pos.y;
	});
	this.update();
};

app.Commands.prototype.update = function(){
	$.each(this.targetGroups, function(i, group){
		group.update();
	});
	this.mainGroup.update();
};

app.Commands.prototype.onLayout = function(data){
	var that = this;
	$.each(data, function(i, obj){
		that.onLayoutGroup(obj);
	});
};

app.Commands.prototype.loadLevel = function(){
	var i, b, that = this, level = app.commsData.level;
	this.makeGroups(level.tabs);
	$.each(level.tiles, function(type, v){
		$.each(Array(v), function(i) {
			b = app.BlockTypes.create(type, that.game);
			b.create();
			b.clickSignal.add($.proxy(that.blockDown, that));
			b.releaseSignal.add($.proxy(that.blockUp, that));
			b.origPos = {"x":b.sprite.x, "y":b.sprite.y};
			b.id = {"type":type, "index":i};
			that.mainGroup.add(b.sprite);
		});  
	});
	app.commsData.reload(this);
};

app.Commands.prototype.getBlockByIndexAndType = function(index, type){
	var blockFound = null;
	$.each(this.targetGroups, function(i, group){
		group.forEach(function(sprite){
			if(sprite.block.id.type === type && sprite.block.id.index === index){
				blockFound = sprite.block;
			}
		});
	});
	this.mainGroup.forEach(function(sprite){
		if(sprite.block.id.type === type && sprite.block.id.index === index){
			blockFound = sprite.block;
		}
	});
	return blockFound;
};

app.Commands.prototype.makeGroups = function(numTabs){
	var that = this;
	$.each(Array(numTabs), function(i) {
		var group = that.game.add.group();
		that.targetGroups.push(group);
	});
	this.mainGroup = this.game.add.group();
	this.currentGroup = this.targetGroups[app.commsData.selectedIndex];
};

app.Commands.prototype.preload = function(){
	
};

app.Commands.prototype.create = function() {
	this.dragger = null;
	this.game.input.onDown.add($.proxy(this.onDown, this));
};

app.Commands.prototype.onUp = function() {
	this.game.input.moveCallback = null;
};

app.Commands.prototype.onDown = function() {
	var input = this.game.input;
	var hits = this.mainGroup.hitTest(input) || this.currentGroup.hitTest(input);
	if(!hits){
		// scroll whole group
		this.startY = this.currentGroup.y;
		this.y0 = input.activePointer.y;
		input.onUp.add($.proxy(this.onUp, this));
		input.moveCallback = $.proxy(this.move, this);
	}
};

app.Commands.prototype.move = function() {
	var input = this.game.input;
	var num = app.commsData.currentTiles().length;
	var miny = -1 * app.CommsData.HEIGHT * num;
	var maxy = 0;
	var y = this.startY - (this.y0 - input.activePointer.y);
	y = Math.min(y, maxy);
	y = Math.max(y, miny);
	this.currentGroup.y = y;
};

app.Commands.prototype.blockDown = function(data) {
	var mainIndex = this.mainGroup.getIndex(data.target.sprite);
	if(mainIndex >= 0){
		// on the left, don't do anything yet
	}
	else{
		// on the right, unsnap it!
		this.currentGroup.remove(data.target.sprite);
		this.mainGroup.add(data.target.sprite);
		data.target.sprite.y += this.currentGroup.y;
		this.lift(data);
	}
};

app.Commands.prototype.lift = function(data) {
	app.commsData.lift(data.target);
};

app.Commands.prototype.drop = function(data) {
	app.commsData.drop(data.target);
};

app.Commands.prototype.blockUp = function(data) {
	var input = this.game.input;
	input.onUp.removeAll();
	input.moveCallback = null;
	var block = data.target;
	var sprite = block.sprite;
	if(sprite.x > 200){
		data.target.sprite.y -= this.currentGroup.y;
		this.drop(data);
	}
	else{
		// go back
		sprite.x = block.origPos.x;
		sprite.y = block.origPos.y;
	}
};

app.Commands.prototype.update = function() {
    
};

app.Commands.prototype.shutdown = function(){
	app.commsData.layoutSignal.removeAll(this);
	app.commsData.tabSignal.removeAll(this);
};
