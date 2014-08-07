
define(function(require, exports){
	
	var TabButton = require('app/components/buttons/tabbutton');
	
	var Tabs = function(game, commsData){
		this.game = game;
		this.commsData = commsData;
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};

	Tabs.prototype.preload = function(){
	
	};

	Tabs.prototype.loadLevel = function(){
		var _this = this, level = this.commsData.level;
		$.each(Array(level.tabs), function(i) {
			b = new TabButton(_this.game);
			b.create();
			b.sprite.x = i * 80;
			b.sprite.y = 4;
			if(i === 1){
				b.goToFrame(2);
			}
			b.mouseDownSignal.add($.proxy(_this.click, _this));
			_this.group.add(b.sprite);
			_this.buttons.push(b);
		}); 
		this.reload();
	};

	Tabs.prototype.selectIndex = function (index) {
		$.each(this.buttons, function(i, button){
			if(i === index){
				button.select();
			}
			else{
				button.deselect();
			}
		});
		this.selectSignal.dispatch({"index":index});
	};

	Tabs.prototype.click = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.selectIndex(index);
	};

	Tabs.prototype.init = function () {
		var index = this.commsData.selectedIndex;
		this.selectIndex(index);
	};

	Tabs.prototype.create = function () {
		this.group = this.game.add.group();
	};

	Tabs.prototype.reload = function(){

	};

	Tabs.prototype.onDown = function() {
		console.log("down");
	};

	Tabs.prototype.update = function() {
    
	};

	Tabs.prototype.shutdown = function(){
		//TODO, clean up
	};
	
	return Tabs;
	
});

