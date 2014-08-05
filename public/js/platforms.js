app.Platforms = function(game){
	this.game = game;
};

app.Platforms.prototype.preload = function(){
    
};

app.Platforms.prototype.create = function () {
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('tiles1');
    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    this.layer = this.map.createLayer('tileLayer1');
    this.layer.debug = true;
    this.layer.resizeWorld();
};

app.Platforms.prototype.update = function() {
    
};

