
define(['app/game', 'app/components/buttongrid', 'app/components/buttons/levelbadge', 'app/utils/Storage'],

function(Game, ButtonGrid, LevelBadge, Storage){
	
	"use strict";
	
	var LevelDataProvider  = function(){
		
	};
	
	LevelDataProvider.prototype.getNumPages = function(){
		return 3;
	};
	
	LevelDataProvider.prototype.addPage = function(i, numX, numY, scroller){
		var options, grid, bounds, w, h, paddingX, paddingY, top, config;
		config = Storage.getInstance().loadLevelDataForPage(i);
		top = 50;
		w = Game.w();
		h = Game.h();
		paddingX = (w - 800)/2;
		paddingY = (h - 600)/2;
		bounds = {"x":i * w + paddingX, "y":paddingY, "w":800, "h":600};
		options = {"bounds":bounds, "numX": numX, "numY": numY, "buttonClass": LevelBadge, "config":config};
		grid = new ButtonGrid(options);
		grid.create();
		scroller.add(grid);
	};
	
	LevelDataProvider.prototype.addAll = function(scroller){
		this.addPage(0, 3, 3, scroller);
		this.addPage(1, 3, 3, scroller);
		this.addPage(2, 3, 3, scroller);
	};
	
	return LevelDataProvider;

});
	
	



