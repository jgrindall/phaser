app.Button = function(game){
	this.game = game;
	this.clicker = new Phaser.Signal();
};

app.Button.prototype.preload = function(){
	this.game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
}

app.Button.prototype.click = function(){
	this.clicker.dispatch({num:"123"});
};

app.Button.prototype.create = function(){
	this.button = this.game.add.button(96, 96, 'button', this.click, this, 2, 1, 0);
    this.button.fixedToCamera = true;
};
