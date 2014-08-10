
define(['app/scenes/scene', 'app/scenes/comms/commands', 'app/components/tabs', 'app/scenes/comms/commsdata', 'app/game'], function(Scene, Commands, Tabs, commsData, Game){
	
	var CommScene  = function(key){
		Scene.call(this, key);
	};
	
	CommScene.prototype = Object.create(Scene.prototype);
	CommScene.prototype.constructor = CommScene;

	CommScene.prototype.loadLevel = function() {
		this.commands.loadLevel();
		this.tabs.loadLevel();
		this.tabs.init();
	};

	CommScene.prototype.preload = function() {
		Scene.prototype.preload.call(this);
	};

	CommScene.prototype.create = function() {
		var bounds;
		Scene.prototype.create.apply(this, arguments);
		this.goButton = new NavButton();
		this.commands = new Commands(commsData);
		bounds = {"x": 0, "y": 0, "w": 300, "h": 50};
		this.tabs = new Tabs({"commsData":commsData, "bounds":bounds});
		this.goButton.create();
		this.goButton.sprite.x = 110;
		this.tabs.create();
		this.tabs.group.x = 300;
		this.commands.create();
		this.tabs.selectSignal.add(this.tabSelected, this);
		this.backButton = new NavButton();
		this.backButton.create();
		Game.getInstance().world.add(this.goButton.sprite);
		Game.getInstance().world.add(this.tabs.group);
		Game.getInstance().world.add(this.backButton.sprite);
		this.addListeners();
		this.loadLevel();
	};
	
	CommScene.prototype.addListeners = function(data) {
		this.goButton.mouseUpSignal.add(this.goButtonClicked, this);
		this.backButton.mouseUpSignal.add(this.backButtonClicked, this);
	};
	
	CommScene.prototype.tabSelected = function(data) {
		commsData.setSelectedTab(data);
	};
	
	CommScene.prototype.backButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key": this.key, "button":"back"});
	};
	
	CommScene.prototype.goButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key": this.key, "button":"go"});
	};

	CommScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	CommScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
		this.commands.shutdown();
		this.tabs.shutdown();
	};
	
	return CommScene;

});
	
	



