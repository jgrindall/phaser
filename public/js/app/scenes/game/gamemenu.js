
define(['app/components/buttons/navbutton', 'app/components/buttons/closebutton', 'app/game', 'app/components/buttons/listbutton', 'app/components/buttons/homebutton', 'app/components/container'],

function(NavButton, CloseButton, Game, ListButton, HomeButton, Container){
	
	"use strict";
		
	var GameMenu = function(options){
		Container.call(this, options);
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	GameMenu.prototype = Object.create(Container.prototype);
	GameMenu.prototype.constructor = GameMenu;
	
	GameMenu.prototype.preload = function(){
    
	};
	
	GameMenu.prototype.addRect = function () {
		this.panel = new Phaser.Sprite(Game.getInstance(), 0, 0, 'panel');
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		this.group.add(this.panel);
		this.group.add(this.buttonGroup);
	};
	
	GameMenu.prototype.addButton = function (_class, x, y) {
		var b = new _class({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.buttonGroup.add(b.sprite);
		this.buttons.push(b);
	};
	
	GameMenu.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addRect();
		this.addButton(NavButton, 100, 200);
		this.addButton(NavButton, 200, 200);
		this.addButton(ListButton, 300, 200);
		this.addButton(HomeButton, 400, 200);
		this.addButton(CloseButton, 500, 150);
	};
	
	GameMenu.prototype.buttonUp = function(data) {
		var index = this.buttonGroup.getIndex(data.target.sprite);
		this.selectSignal.dispatch({"index":index});
	};
	
	GameMenu.prototype.destroy = function() {
		$.each(this.buttons, function(i, b){
			b.mouseUpSignal.removeAll(this);
		});
		Container.prototype.destroy.call(this);
	};
	
	GameMenu.prototype.update = function() {
    
	};
	
	return GameMenu;
	
});
	






