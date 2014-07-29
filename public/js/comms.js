app.Comms = function(game){
	this.game = game;
	this.dragger = null;
	this.blocks = [];
	this.data = [3, 4];
	this.makeAll();
};

app.Comms.prototype.makeAll = function(){
	var i, b, _this = this;
	$.each(this.data, function(key, v){
		for(i = 1; i <= v; i++){
			b = app.BlockTypes.create(key, _this.game);
			_this.blocks.push(b);
		}
	});
};

app.Comms.prototype.preload = function(){
 	this.game.load.image('atari2', 'assets/atari800xl.png');
   	this.game.load.image('atari1', 'assets/atari130xe.png');
	$.each(this.blocks, function(i, block){
		block.preload();
	});
};

app.Comms.prototype.create = function () {
	$.each(this.blocks, function(i, block){
		block.create();
	});
};

app.Comms.prototype.update = function() {
    
};
