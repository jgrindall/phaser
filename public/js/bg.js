
app.Bg = function(game){
	this.game = game;
};

app.Bg.prototype.preload = function(){
	this.game.load.image('background', 'assets/background2.png');
	
}

app.Bg.prototype.create = function(){
	this.sprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    this.sprite.fixedToCamera = true;
};

