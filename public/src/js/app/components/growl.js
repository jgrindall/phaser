
define(['app/components/buttons/tickbutton', 'app/game', 'app/components/container', 'app/utils/textfactory', 'app/components/abstractpopup'],

function(TickButton, Game, Container, TextFactory, AbstractPopup){
	
	"use strict";
		
	var Growl = function(options){
		options.bgasset = 'alert';
		AbstractPopup.call(this, options);
	};
	
	Growl.prototype = Object.create(AbstractPopup.prototype);
	Growl.prototype.constructor = Growl;
	
	Growl.WIDTH = 400;
	Growl.HEIGHT = 200;
	
	Growl.prototype.addOk = function () {
		var x, y, b;
		x = Game.cx() - TickButton.WIDTH/2;
		y = this.bounds.y + this.bounds.h - TickButton.HEIGHT;
		b = new TickButton({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.group.add(b.sprite);
		this.buttons.push(b);
	};
	
	Growl.prototype.addButtons = function () {
		AbstractPopup.prototype.addButtons.call(this);
		this.addOk();
	};
	
	return Growl;
	
});
	






