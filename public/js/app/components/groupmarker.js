
define(['app/game', 'app/components/buttons/markerbutton', 'app/components/container'],function(Game, MarkerButton, Container){
	
	var GroupMarker = function(options){
		Container.call(this, options);
		this.buttons = [];
	};
	
	GroupMarker.prototype = Object.create(Container.prototype);
	GroupMarker.prototype.constructor = GroupMarker;
	
	GroupMarker.prototype.create = function(){
		Container.prototype.create.call(this);
		var b, i;
		for(i = 1; i <= this.options.num; i++){
			b = new MarkerButton();
			b.create();
			b.sprite.x = 100 + i * 20;
			b.sprite.y = 400;
			this.group.add(b.sprite);
			this.buttons.push(b);
		}
		this.setSelected(0);
	};
	
	GroupMarker.prototype.setSelected = function(index) {
		$.each(this.buttons, function(i, button){
			if(i === index){
				button.select();
			}
			else{
				button.deselect();
			}
		});
	};

	return GroupMarker;

});



