
define(['app/game'],function(Game){
	
	var Container = function(options){
		this.options = options || {};
		if(!this.options.bounds){
			this.options.bounds = {};
		}
		this.bounds = this.options.bounds;
	};

	Container.prototype.create = function(){
		this.group = Game.getInstance().add.group();
	};
	
	Container.prototype.destroy = function() {
		this.group.removeAll(true);
	};

	return Container;

});



