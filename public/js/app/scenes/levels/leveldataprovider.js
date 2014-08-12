
define(['app/game', 'app/components/buttongrid', 'app/components/buttons/levelsbutton'], function(Game, ButtonGrid, LevelsButton){
	
	"use strict";
	
	var LevelDataProvider  = function(){
		
	};
	
	LevelDataProvider.prototype.getNumPages = function(){
		return 3;
	};
	
	LevelDataProvider.prototype.addPage = function(i, numX, numY, scroller){
		var options, grid, bounds, w, h, paddingX, paddingY, top;
		top = 50;
		w = Game.w();
		h = Game.h();
		paddingX = (w - 800)/2;
		paddingY = (h - 600)/2;
		bounds = {"x":i * w + paddingX, "y":paddingY, "w":800, "h":600};
		options = {"bounds":bounds, "numX": numX, "numY": numY, "buttonClass": LevelsButton};
		grid = new ButtonGrid(options);
		grid.create();
		scroller.add(grid);
	};
	
	LevelDataProvider.prototype.addAll = function(scroller){
		this.addPage(0, 3, 3, scroller);
		this.addPage(1, 3, 3, scroller);
		this.addPage(2, 4, 4, scroller);
	};
	
	return LevelDataProvider;

});
	
	



