
define(['app/components/buttons/navbutton', 'app/game', 'app/components/container'], function(NavButton, Game, Container){
	
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
		this.rect = new Phaser.Graphics(Game.getInstance(), 0, 0);
		this.rect.beginFill(0x000000);
   		this.rect.lineStyle(10, 0xffd900, 1);
    	this.rect.drawRect(50, 250, 700, 400);
		this.group.add(this.rect);
	};
	
	GameMenu.prototype.addButtons = function () {
		console.log("addButtons");
		var that = this, b;
		$.each(Array(4), function(i) {
			b = new NavButton();
			b.create();
			b.sprite.x = 200 * i;
			b.sprite.y = 200;
			b.mouseUpSignal.add(that.buttonUp, that);
			that.group.add(b.sprite);
			that.buttons.push(b);
		});
	};
	
	GameMenu.prototype.create = function () {
		console.log("create");
		Container.prototype.create.call(this);
		this.group.fixedToCamera = true;
		this.addRect();
		this.addButtons();
	};
	
	GameMenu.prototype.buttonUp = function(data) {
		var index = this.group.getIndex(data.target.sprite);
		this.selectSignal.dispatch({"index":index - 1});
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
	






