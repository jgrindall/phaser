
app.Tabs = function(game){
	this.game = game;
	this.selectSignal = new Phaser.Signal();
	this.buttons = [];
};

app.Tabs.prototype.preload = function(){
	
};

app.Tabs.prototype.loadLevel = function(){
	var _this = this, level = app.commsData.level;
	$.each(Array(level.tabs), function(i) {
		b = new app.TabButton(_this.game);
		b.create();
		b.sprite.x = i * 80;
		b.sprite.y = 4;
		if(i === 1){
			b.goToFrame(2);
		}
		b.mouseDownSignal.add($.proxy(_this.click, _this));
		_this.group.add(b.sprite);
		_this.buttons.push(b);
	}); 
	this.reload();
};

app.Tabs.prototype.selectIndex = function (index) {
	$.each(this.buttons, function(i, button){
		if(i === index){
			button.goToFrame(2);
		}
		else{
			button.goToFrame(0);
		}
	});
	this.selectSignal.dispatch({"index":index});
};

app.Tabs.prototype.click = function (data) {
	var index = this.group.getIndex(data.target.sprite);
	this.selectIndex(index);
};

app.Tabs.prototype.init = function () {
	var index = app.commsData.selectedIndex;
	this.selectIndex(index);
};

app.Tabs.prototype.create = function () {
	this.group = this.game.add.group();
};

app.Tabs.prototype.reload = function(){

};

app.Tabs.prototype.onDown = function() {
	console.log("down");
};

app.Tabs.prototype.update = function() {
    
};

app.Tabs.prototype.shutdown = function(){
	//TODO, clean up
};
