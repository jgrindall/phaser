
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
		this.addButton(TickButton, 'bottom');
	};
	
	Alert.prototype.addButtons = function () {
		AbstractPopup.prototype.addButtons.call(this);
		this.addOk();
	};
	
	return Alert;
	
});
	






