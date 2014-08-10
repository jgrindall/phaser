
define(['app/game'], function(Game){
	
	var TextFactory  = function(){
		
	};
	
	TextFactory.DEFAULT_FONT = {font: "100px Yanone", align: "center"};
	
	TextFactory.centreX = function(label){
		
	};
		
	TextFactory.make = function(x, y, label){
		var text = new Phaser.Text(Game.getInstance(), x, y, label, TextFactory.DEFAULT_FONT);
	    text.stroke = '#000044';
	    text.strokeThickness = 2;
	    var fill = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
		fill.addColorStop(0, '#ffffff');   
		fill.addColorStop(1, '#eeeeee');
		text.fill = fill;
		text.setShadow(3, 3, 'rgba(1, 1, 1, 0.5)', 5);
		return text;
	};
	
	return TextFactory;

});
	
	

