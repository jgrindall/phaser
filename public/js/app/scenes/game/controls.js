define(['app/game', 'app/components/buttons/controlbutton', 'app/components/container'], function(Game, ControlButton, Container){
	
	var Controls = function(options){
		Container.call(this, options);
		this.upSignal = new Phaser.Signal();
		this.downSignal = new Phaser.Signal();
		this.buttons = [];
	};
	
	Controls.prototype = Object.create(Container.prototype);
	Controls.prototype.constructor = Controls;
	
	Controls.prototype.preload = function(){
	
	};

	Controls.prototype.create = function () {
		Container.prototype.create.call(this);
		var that = this;
		$.each(Array(4), function(i) {
			b = new ControlButton();
			b.create();
			b.sprite.x = 100 + i * 180;
			b.sprite.y = 400;
			b.mouseDownSignal.add($.proxy(that.controlDown, that));
			b.mouseUpSignal.add($.proxy(that.controlUp, that));
			that.group.add(b.sprite);
			that.buttons.push(b);
		}); 
	};
	
	Controls.prototype.controlDown = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.downSignal.dispatch({"index":index});
	};
	
	Controls.prototype.controlUp = function (data) {
		var index = this.group.getIndex(data.target.sprite);
		this.upSignal.dispatch({"index":index});
	};
	
	Controls.prototype.update = function() {
    
	};
	
	return Controls;
	
});


