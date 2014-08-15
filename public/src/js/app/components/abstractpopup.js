
define(['app/components/buttons/closebutton', 'app/game', 'app/components/container', 'app/utils/textfactory'],

function(CloseButton, Game, Container, TextFactory){
	
	"use strict";
		
	var AbstractPopup = function(options){
		Container.call(this, options);
		this.selectSignal = new Phaser.Signal();
		this.buttons = [];
		this.create();
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
	
	AbstractPopup.prototype.getPosition = function (ClassRef, pos, i, num) {
		var x0 = this.bounds.x + this.bounds.w/2 - num*(ClassRef.WIDTH)/2;
		if(pos === 'topright'){
			return {"x":this.bounds.x + this.bounds.w - 50, "y":this.bounds.y + 10};
		}
		else if(pos === 'middle'){
			return {"x":x0 + i * ClassRef.WIDTH, "y":this.bounds.y + this.bounds.h/2 - ClassRef.HEIGHT/2};
		}
		else if(pos === 'bottom'){
			return {"x":Game.cx() - ClassRef.WIDTH/2, "y":this.bounds.y + this.bounds.h - ClassRef.HEIGHT};
		}
	};
	
	AbstractPopup.prototype.addButtonGroup = function () {
		this.buttonGroup = new Phaser.Group(Game.getInstance(), 0, 0);
		this.group.add(this.buttonGroup);
	};
	
	AbstractPopup.prototype.addCloseButton = function () {
		this.addButton(CloseButton, 'topright');
	};
	
	AbstractPopup.prototype.addButtons = function () {
		
	};
	
	AbstractPopup.prototype.addButton = function (ClassRef, pos, i, num) {
		var p, b;
		p = this.getPosition(ClassRef, pos, i, num);
		b = new ClassRef({"x":p.x, "y":p.y});
		b.pos = pos;
		b.mouseUpSignal.add(this.buttonUp, this);
		this.buttonGroup.add(b.sprite);
		this.buttons.push(b);
	};
	
	AbstractPopup.prototype.create = function () {
		Container.prototype.create.call(this);
		this.addBg();
		this.addRect();
		this.addText();
		this.addButtonGroup();
		this.addButtons();
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
	



