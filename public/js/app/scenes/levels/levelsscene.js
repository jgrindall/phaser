
define(['app/scenes/scene', 'app/components/scroller', 'app/components/pager', 'app/utils/textfactory', 'app/components/buttons/levelsbutton', 'app/components/buttons/homebutton', 'app/game', 'app/scenes/levels/leveldataprovider'],

function(Scene, Scroller, Pager, TextFactory, LevelsButton, HomeButton, Game, LevelDataProvider){
	
	"use strict";
	
	var LevelsScene  = function(key){
		Scene.call(this, key);
	};

	LevelsScene.prototype = Object.create(Scene.prototype);
	LevelsScene.prototype.constructor = LevelsScene;

	LevelsScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	LevelsScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		var options = {"snapX":100, "dataProvider" : new LevelDataProvider()};
		this.scroller = new Pager(options);
		this.scroller.create();
		this.scroller.selectSignal.add(this.levelSelect, this);
		this.text = TextFactory.make(Game.getInstance().world.centerX - 300, 0, "Choose a level");
		this.backButton = new HomeButton({"x":0, "y":0});
		this.backButton.create();
		Game.getInstance().world.add(this.backButton.sprite);
		Game.getInstance().world.add(this.scroller.group);
		Game.getInstance().world.add(this.text);
		this.backButton.mouseUpSignal.add(this.backButtonClicked, this);
	};
	
	LevelsScene.prototype.backButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"back"});
	};
	
	LevelsScene.prototype.levelSelect = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"level", "index":data.index});
	};

	LevelsScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	LevelsScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
		if(this.scroller){
			this.scroller.destroy();
		}
	};

	return LevelsScene;

});
	
	


