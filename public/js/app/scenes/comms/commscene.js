
define(['app/scenes/scene', 'app/scenes/comms/commands', 'app/components/tabs', 'app/components/buttons/tabbutton', 'app/scenes/comms/commsdata', 'app/components/buttons/navbutton', 'app/components/buttons/homebutton', 'app/game'],

function(Scene, Commands, Tabs, TabButton, commsData, NavButton, HomeButton, Game){
	
	"use strict";
	
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
		var bounds, numTabs, w;
		numTabs = commsData.level.tabs;
		w = numTabs * TabButton.WIDTH;
		Scene.prototype.create.apply(this, arguments);
		this.goButton = new NavButton({"x":110, "y":0});
		this.commands = new Commands(commsData);
		bounds = {"x": Game.getInstance().world.width - w, "y": 0, "w": w, "h": 50};
		this.tabs = new Tabs({"commsData":commsData, "bounds":bounds});
		this.goButton.create();
		this.tabs.create();
		this.commands.create();
		this.tabs.selectSignal.add(this.tabSelected, this);
		this.backButton = new HomeButton({"x":0, "y":0});
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
	
	



