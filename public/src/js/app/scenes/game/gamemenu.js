
define(['app/components/buttons/navbutton', 'app/components/buttons/closebutton', 'app/game', 'app/components/buttons/listbutton', 'app/components/buttons/homebutton', 'app/components/container', 'app/components/abstractpopup'],

function(NavButton, CloseButton, Game, ListButton, HomeButton, Container, AbstractPopup){
	
	"use strict";
		
	var GameMenu = function(options){
		options.bgasset = 'panel';
		AbstractPopup.call(this, options);
	};
	
	GameMenu.WIDTH = 800;
	GameMenu.HEIGHT = 600;
	
	GameMenu.prototype = Object.create(AbstractPopup.prototype);
	GameMenu.prototype.constructor = GameMenu;
	
	GameMenu.prototype.addButton = function (ClassRef, x, y) {
		var b = new ClassRef({"x":x, "y":y});
		b.create();
		b.mouseUpSignal.add(this.buttonUp, this);
		this.buttonGroup.add(b.sprite);
		this.buttons.push(b);
	};
	
	GameMenu.prototype.addButtons = function () {
		AbstractPopup.prototype.addButtons.call(this);
		var y = this.bounds.y + this.bounds.h/2 - NavButton.HEIGHT/2;
		this.addButton(NavButton, 200, y);
		this.addButton(NavButton, 350, y);
		this.addButton(ListButton, 500, y);
		this.addButton(HomeButton, 650, y);
		this.addButton(NavButton, 750, y);
		this.addButton(CloseButton, this.bounds.x + this.bounds.w - 50, this.bounds.y + 10);
	};
	
	return GameMenu;
	
});

