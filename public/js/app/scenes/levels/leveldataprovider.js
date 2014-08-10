
define(['app/game', 'app/components/buttongrid', 'app/components/buttons/levelsbutton'], function(Game, ButtonGrid, LevelsButton){
	
	var LevelDataProvider  = function(){
		
	};
	
	LevelDataProvider.prototype.getNumPages = function(){
		return 2;
	};
	
	LevelDataProvider.prototype.addPage = function(i, numX, numY, scroller){
		var options, grid, bounds, w;
		w = Game.getInstance().world.width;
		bounds = {"x":i * w, "y":50, "w":w, "h":Game.getInstance().world.height};
		options = {"bounds":bounds, "numX": numX, "numY": numY, "buttonClass": LevelsButton};
		grid = new ButtonGrid(options);
		grid.create();
		scroller.add(grid);
	};
	
	LevelDataProvider.prototype.addAll = function(scroller){
		this.addPage(0, 4, 5, scroller);
		this.addPage(1, 6, 3, scroller);
	};
	
	return LevelDataProvider;

});
	
	



