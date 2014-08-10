
define(['app/game', 'app/components/container'],function(Game, Container){
	
	var ButtonGrid = function(options){
		Container.call(this, options);
		this.spaceX = this.bounds.w / this.options.numX;
		this.spaceY = this.bounds.h / this.options.numY;
		this.signal = new Phaser.Signal();
	};
	
	ButtonGrid.prototype = Object.create(Container.prototype);
	ButtonGrid.prototype.constructor = ButtonGrid;
	
	ButtonGrid.prototype.create = function(){
		Container.prototype.create.call(this);
		for(i = 1; i <= this.options.numX; i++){
			for(j = 1; j <= this.options.numY; j++){
				b = new this.options.buttonClass();
				b.create();
				b.sprite.x = this.bounds.x + this.spaceX * (i - 1);
				b.sprite.y = this.bounds.y + this.spaceY * (j - 1);
				b.mouseUpSignal.add(this.buttonUp, this);
				this.group.add(b.sprite);
			}
		}
	};
	
	ButtonGrid.prototype.destroy = function() {
		Container.prototype.destroy.call(this);
	};
	
	ButtonGrid.prototype.buttonUp = function(data) {
		var index = this.group.getIndex(data.target.sprite);
		this.signal.dispatch({"index":index, "grid":this});
	};
	
	return ButtonGrid;

});



