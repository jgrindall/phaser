
define(['app/game', 'app/components/scroller', 'app/components/groupmarker'],function(Game, Scroller, GroupMarker){
	
	var Pager = function(options){
		options.snapX = Game.getInstance().world.width;
		Scroller.call(this, options);
	};
	
	Pager.prototype = Object.create(Scroller.prototype);
	Pager.prototype.constructor = Pager;
	
	Pager.prototype.addChildren = function(){
		Scroller.prototype.addChildren.call(this);
		if(this.options.marker){
			this.groupMarker = new GroupMarker({"num":this.options.dataProvider.getNumPages()});
			this.groupMarker.create();
			Game.getInstance().world.add(this.groupMarker.group);
		}
	};
	
	Pager.prototype.snap = function() {
		Scroller.prototype.snap.call(this);
		var pageNum = 1;
		if(this.groupMarker){
			this.groupMarker.setSelected(pageNum);
		}
	};

	return Pager;

});



