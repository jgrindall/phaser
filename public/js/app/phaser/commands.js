
define(function(require, exports){
	
	var BlocksFactory = require('app/phaser/blocksfactory');
	
	var Commands = function(game, commsData){
		this.game = game;
		this.mainGroup = null;
		this.targetGroups = [];
		this.commsData = commsData;
		commsData.layoutSignal.add(this.onLayout, this);
		commsData.tabSignal.add(this.onSelectTab, this);
	};

	Commands.prototype.onSelectTab = function(){
		var index = this.commsData.selectedIndex;
		$.each(this.targetGroups, function(i, group){
			group.visible = (i === index);
		});
		this.currentGroup = this.targetGroups[index];
	};

	Commands.prototype.onLayoutGroup = function(obj){
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

	Commands.prototype.update = function(){
		$.each(this.targetGroups, function(i, group){
			group.update();
		});
		this.mainGroup.update();
	};

	Commands.prototype.onLayout = function(data){
		var that = this;
		$.each(data, function(i, obj){
			that.onLayoutGroup(obj);
		});
	};

	Commands.prototype.loadLevel = function(){
		var i, b, that = this, level = this.commsData.level;
		this.makeGroups(level.tabs);
		$.each(level.tiles, function(type, v){
			$.each(Array(v), function(i) {
				b = BlocksFactory.create(type, that.game);
				b.create();
				b.clickSignal.add($.proxy(that.blockDown, that));
				b.releaseSignal.add($.proxy(that.blockUp, that));
				b.origPos = {"x":b.sprite.x, "y":b.sprite.y};
				b.id = {"type":type, "index":i};
				that.mainGroup.add(b.sprite);
			});  
		});
		this.commsData.reload(this);
	};

	Commands.prototype.getBlockByIndexAndType = function(index, type){
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

	Commands.prototype.makeGroups = function(numTabs){
		var that = this;
		$.each(Array(numTabs), function(i) {
			var group = that.game.add.group();
			that.targetGroups.push(group);
		});
		this.mainGroup = this.game.add.group();
		this.currentGroup = this.targetGroups[this.commsData.selectedIndex];
	};

	Commands.prototype.preload = function(){
	
	};

	Commands.prototype.create = function() {
		this.dragger = null;
		this.game.input.onDown.add($.proxy(this.onDown, this));
	};

	Commands.prototype.onUp = function() {
		this.game.input.moveCallback = null;
	};

	Commands.prototype.onDown = function() {
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

	Commands.prototype.move = function() {
		var input = this.game.input;
		var num = this.commsData.currentTiles().length;
		var miny = -1 * CommsData.HEIGHT * num;
		var maxy = 0;
		var y = this.startY - (this.y0 - input.activePointer.y);
		y = Math.min(y, maxy);
		y = Math.max(y, miny);
		this.currentGroup.y = y;
	};

	Commands.prototype.blockDown = function(data) {
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

	Commands.prototype.lift = function(data) {
		this.commsData.lift(data.target);
	};

	Commands.prototype.drop = function(data) {
		this.commsData.drop(data.target);
	};

	Commands.prototype.blockUp = function(data) {
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

	Commands.prototype.update = function() {
    
	};

	Commands.prototype.shutdown = function(){
		this.commsData.layoutSignal.removeAll(this);
		this.commsData.tabSignal.removeAll(this);
	};
	
	return Commands;
	
});
