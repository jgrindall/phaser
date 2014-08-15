
define(['app/components/buttons/tickbutton', 'app/game', 'app/components/container', 'app/utils/textfactory', 'app/components/abstractpopup'],

function(TickButton, Game, Container, TextFactory, AbstractPopup){
	
	"use strict";
		
	var Alert = function(options){
		options.bgasset = 'alert';
		AbstractPopup.call(this, options);
	};
	
	Alert.prototype = Object.create(AbstractPopup.prototype);
	Alert.prototype.constructor = Alert;
	
	Alert.WIDTH = 400;
	Alert.HEIGHT = 200;
	
	Alert.prototype.addOk = function () {
		var x, y, b;
		x = Game.cx() - TickButton.WIDTH/2;
		y = this.bounds.y + this.bounds.h - TickButton.HEIGHT;
		b = new TickButton({"x":x, "y":y});
		b.mouseUpSignal.add(this.buttonUp, this);
		this.group.add(b.sprite);
		this.buttons.push(b);
	};
	
	Alert.prototype.addButtons = function () {
		AbstractPopup.prototype.addButtons.call(this);
		this.addOk();
	};
	
	return Alert;
	
});
	






