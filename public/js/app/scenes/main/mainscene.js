
define(['app/scenes/scene', 'app/preloader/preloader', 'app/components/buttons/navbutton', 'app/utils/textfactory', 'app/game'],function(Scene, Preloader, NavButton, TextFactory, Game){
	
	var MainScene  = function(key){
		Scene.call(this, key);
		this.numLoaded = 0;
	};
	
	MainScene.created = false;
	
	MainScene.prototype = Object.create(Scene.prototype);
	MainScene.prototype.constructor = MainScene;

	MainScene.prototype.preload = function() {
		if(!MainScene.created){
			this.addChildren();
			this.preloader = new Preloader();
			this.preloader.loadSignal.add(this.loadProgress, this);
			this.preloader.start();
		}
	};
	
	MainScene.prototype.addChildren = function() {
		Scene.prototype.addChildren.call(this);
		this.addBar();
		this.addText();
		this.addButtons();
	};
	
	MainScene.prototype.addBar = function() {
		this.loaderBar = new Phaser.Sprite(Game.getInstance(), 500, 60, 'loaderBar');
		Game.getInstance().world.add(this.loaderBar);
	};
	
	MainScene.prototype.addText = function() {
		this.label = TextFactory.make(Game.getInstance().world.centerX - 300, 0, "Main menu");
		this.preloadLabel = TextFactory.make(Game.getInstance().world.centerX - 300, 50, "Loaded 0%");
		Game.getInstance().world.add(this.label);
		Game.getInstance().world.add(this.preloadLabel);
	};
	
	MainScene.prototype.addButtons = function() {
		this.startButton = new NavButton();
		this.tutorialButton = new NavButton();
		this.startButton.create();
		this.tutorialButton.create();
		this.tutorialButton.sprite.x = 100;
		this.startButton.sprite.y = 200;
		this.tutorialButton.sprite.y = 200;
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		this.tutorialButton.mouseUpSignal.add(this.tutorialButtonClicked, this);
		Game.getInstance().world.add(this.startButton.sprite);
		Game.getInstance().world.add(this.tutorialButton.sprite);
	};
	
	MainScene.prototype.loadProgress = function(data) {
		var p = Math.round(data.numLoaded * 100 / data.total);
		this.preloadLabel.text = "Loaded "+p+"%";
	};

	MainScene.prototype.create = function() {
		MainScene.created = true;
		Scene.prototype.create.call(this);
		this.preloadLabel.text = "Loaded 100%";
	};

	MainScene.prototype.startButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"start"});
	};

	MainScene.prototype.tutorialButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key, "button":"tutorial"});
	};

	MainScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	MainScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return MainScene;

});
	
	

		



