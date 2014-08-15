
define(['app/components/buttons/tickbutton', 'app/game', 'app/components/container', 'app/utils/textfactory'],

function(TickButton, Game, Container, TextFactory){
	
	"use strict";
		
	var AbstractPopup = function(options){
		Container.call(this, options);
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	AbstractPopup.prototype = Object.create(Container.prototype);
	AbstractPopup.prototype.constructor = AbstractPopup;
	
	AbstractPopup.prototype.addRect = function () {
		this.panel = new Phaser.Sprite(Game.getInstance(), this.bounds.x, this.bounds.y, this.options.bgasset);
		this.group.add(this.panel);
	};
	
	AbstractPopup.prototype.addBg = function () {
		this.rect = new Phaser.Graphics(Game.getInstance(), 0, 0);
		this.rect.beginFill(0x000000);
		this.rect.alpha = 0.7;
    	this.rect.drawRect(0, 0, Game.w(), Game.h());
		this.group.add(this.rect);
	};
	
	AbstractPopup.prototype.addText = function () {
		this.label = TextFactory.make(Game.cx() - 150, this.bounds.y + 20, this.options.label, TextFactory.SMALL);
		this.group.add(this.label);
	};
	
	AbstractPopup.prototype.addButtons = function () {
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		this.group.add(this.buttonGroup);
	};
	
	AbstractPopup.prototype.addOk = function () {
		var x, y, b;
		x = Game.cx() - TickButton.WIDTH/2;
		y = this.bounds.y + this.bounds.h - TickButton.HEIGHT;
		b = new TickButton({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.group.add(b.sprite);
	};
	
	AbstractPopup.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addBg();
		this.addRect();
		this.addButtons();
		this.addText();
	};
	
	AbstractPopup.prototype.buttonUp = function(data) {
		var index = this.buttonGroup.getIndex(data.target.sprite);
		this.selectSignal.dispatch({"index":index});
	};
	
	AbstractPopup.prototype.destroy = function() {
		$.each(this.buttons, function(i, b){
			b.mouseUpSignal.removeAll(this);
		});
		Container.prototype.destroy.call(this);
	};
	
	return AbstractPopup;
	
});
	






