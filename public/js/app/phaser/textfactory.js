
define(function(require, exports){
	
	var TextFactory  = function(){
		
	};
	
	TextFactory.DEFAULT_FONT = {font: "80px Yanone", align: "center"};
	
	TextFactory.make = function(game, x, y, label){
		var text = game.add.text(x, y, label, TextFactory.DEFAULT_FONT);
	    text.stroke = '#ffffff';
	    text.strokeThickness = 3;
	    var fill = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
		fill.addColorStop(0, '#ff0034');   
		fill.addColorStop(1, '#ff8854');
		text.fill = fill;
		text.setShadow(3, 3, 'rgba(1, 1, 1, 0.5)', 5);
		return text;
	};
	
	return TextFactory;

});
	
	

