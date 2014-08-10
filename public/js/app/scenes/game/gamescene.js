
define(['app/scenes/scene', 'app/components/buttons/navbutton', 'app/scenes/comms/commsdata', 'app/scenes/game/controls', 'app/scenes/game/gamemode', 'app/scenes/game/gameview', 'app/scenes/game/gamemenu', 'app/game'],

function(Scene, NavButton, commsData, Controls, GameMode, GameView, GameMenu, Game){
	
	var GameScene  = function(key){
		Scene.call(this, key);
		this.gameMenu = null;
	};
	
	GameScene.prototype = Object.create(Scene.prototype);
	GameScene.prototype.constructor = GameScene;

	GameScene.prototype.preload = function() {
		Scene.prototype.preload.apply(this, arguments);
	};
	
	GameScene.prototype.addControls = function() {
		this.controls = new Controls();
		this.controls.create();
		Game.getInstance().world.add(this.controls.group);
		this.controls.upSignal.add(this.gameView.controlUp, this.gameView);
		this.controls.downSignal.add(this.gameView.controlDown, this.gameView);
	};
	GameScene.prototype.showControls = function(tf) {
		this.controls.visible = tf;
	};
	
	GameScene.prototype.create = function() {
		Scene.prototype.create.apply(this, arguments);
		this.gameView = new GameView(Game.getInstance());
		this.button = new NavButton(Game.getInstance());
		this.gameView.create();
	    this.button.create();
		this.button.sprite.fixedToCamera = true;
		this.button.mouseUpSignal.add(this.buttonClicked, this);
		Game.getInstance().world.add(this.button.sprite);
		if(commsData.mode != GameMode.COMMANDS){
			this.addControls();
		}
		this.checkLaunch();
	};
	
	GameScene.prototype.checkLaunch = function() {
		var that = this;
		console.log("mode " + commsData.mode);
		if(commsData.mode === GameMode.UNKNOWN){
			setTimeout(function(){
				that.showMenu();
			}, 1000);
		}
		else if(commsData.mode === GameMode.COMMANDS){
			setTimeout(function(){
				that.gameView.playBack();
			}, 1000);
		}
	};
	
	GameScene.prototype.showMenu = function(data) {
		var options;
		console.log("showMenu "+this.gameMenu);
		Game.pausePhysics();
		options = {"bounds":{"x":0, "y":0, "w":300, "h":200}};
		if(!this.gameMenu){
			this.gameMenu = new GameMenu(options);
			this.gameMenu.create();
			Game.getInstance().world.add(this.gameMenu.group);
			console.log("sig "+this.gameMenu.selectSignal);
			this.gameMenu.selectSignal.add(this.menuClick, this);
		}
	};

	GameScene.prototype.menuClick = function(data) {
		console.log("hit "+JSON.stringify(data));
		if(data.index === 0){
			commsData.setMode(GameMode.INTERACTIVE);
			this.hideMenu();
		}
		else if(data.index === 1){
			commsData.setMode(GameMode.COMMANDS);
			this.navigationSignal.dispatch({"key":this.key, "target":"comms"});
		}
		else if(data.index === 2){
			this.navigationSignal.dispatch({"key":this.key, "target":"home"});
		}
		else if(data.index === 3){
			this.navigationSignal.dispatch({"key":this.key, "target":"levels"});
		}
	};
	
	GameScene.prototype.hideMenu = function(data) {
		Game.unPausePhysics();
		Game.getInstance().world.remove(this.gameMenu.group);
		this.gameMenu.selectSignal.removeAll(this);
		this.gameMenu.destroy();
		this.gameMenu = null;
	};
	
	GameScene.prototype.buttonClicked = function(data) {
		this.showMenu();
	};

	GameScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
		this.gameView.update();
	};
	
	GameScene.prototype.shutdown = function() {
		this.gameView.shutdown();
		this.hideMenu();
		Scene.prototype.shutdown.apply(this, arguments);
	};
	
	return GameScene;

});
	
