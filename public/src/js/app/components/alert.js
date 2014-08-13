
define(['app/components/buttons/navbutton', 'app/components/buttons/closebutton', 'app/game', 'app/components/buttons/listbutton', 'app/components/buttons/homebutton', 'app/components/container'],

function(NavButton, CloseButton, Game, ListButton, HomeButton, Container){
	
	"use strict";
		
	var Alert = function(options){
		Container.call(this, options);
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	Alert.WIDTH = 800;
	Alert.HEIGHT = 600;
	
	Alert.prototype = Object.create(Container.prototype);
	Alert.prototype.constructor = GameMenu;
	
	Alert.prototype.preload = function(){
    
	};
	
	Alert.prototype.addRect = function () {
		this.panel = new Phaser.Sprite(Game.getInstance(), this.bounds.x, this.bounds.y, 'panel');
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		this.group.add(this.panel);
		this.group.add(this.buttonGroup);
	};
	
	Alert.prototype.addButton = function (ClassRef, x, y) {
		var b = new ClassRef({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.buttonGroup.add(b.sprite);
		this.buttons.push(b);
	};
	
	Alert.prototype.addText = function () {
		this.label = TextFactory.make(Game.cx() - 300, 0, "Title");
		this.group.add(this.label);
	};
	
	Alert.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addRect();
		var y = this.bounds.y + this.bounds.h/2 - NavButton.HEIGHT/2;
		this.addButton(NavButton, 200, y);
		this.addButton(NavButton, 350, y);
		this.addText();
	};
	
	Alert.prototype.buttonUp = function(data) {
		var index = this.buttonGroup.getIndex(data.target.sprite);
		this.selectSignal.dispatch({"index":index});
	};
	
	Alert.prototype.destroy = function() {
		$.each(this.buttons, function(i, b){
			b.mouseUpSignal.removeAll(this);
		});
		Container.prototype.destroy.call(this);
	};
	
	Alert.prototype.update = function() {
    
	};
	
	return Alert;
	
});
	






