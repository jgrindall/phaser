
define(['app/scenes/scene', 'app/components/scroller', 'app/components/pager', 'app/utils/textfactory', 'app/components/buttons/levelsbutton', 'app/game', 'app/scenes/levels/leveldataprovider'], function(Scene, Scroller, Pager, TextFactory, LevelsButton, Game, LevelDataProvider){
	
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
		this.backButton = new NavButton();
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
		console.log("level "+JSON.stringify(data));
		this.navigationSignal.dispatch({"key":this.key, "button":"level", "index":data.index});
	};

	LevelsScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	LevelsScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return LevelsScene;

});
	
	



