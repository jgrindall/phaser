
define(['app/components/buttons/tabbutton', 'app/game', 'app/components/container'],function(TabButton, Game, Container){
	
	"use strict";
	
	var Tabs = function(options){
		Container.call(this, options);
		this.commsData = this.options.commsData;
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	Tabs.prototype = Object.create(Container.prototype);
	Tabs.prototype.constructor = Tabs;
	
	Tabs.prototype.preload = function(){
	
	};

	Tabs.prototype.loadLevel = function(){
		var _this = this, level = this.commsData.level;
		$.each(Array(level.tabs), function(i) {
			b = new TabButton({"x":i * 80, "y":40});
			b.create();
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
		Container.prototype.create.call(this);
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

