define(['app/game', 'app/components/buttons/controlbutton', 'app/components/buttons/pausebutton', 'app/components/container'],

function(Game, ControlButton, PauseButton, Container){
	
	"use strict";
	
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
		this.group.fixedToCamera = true;
		var that = this, b;
		$.each(Array(4), function(i) {
			b = new ControlButton({"x":100 + i*100, "y":Game.getInstance().world.height - ControlButton.HEIGHT});
			b.create();
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


