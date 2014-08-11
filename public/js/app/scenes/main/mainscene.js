
define(['app/scenes/scene', 'app/preloader/preloader', 'app/components/buttons/navbutton', 'app/components/buttons/bulbbutton', 'app/components/loaderbar', 'app/utils/textfactory', 'app/game'],

function(Scene, Preloader, NavButton, BulbButton, LoaderBar, TextFactory, Game){
	
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
		var x, y, options;
		x = Game.getInstance().world.centerX - LoaderBar.WIDTH/2;
		y = Game.getInstance().world.height - LoaderBar.HEIGHT - 20;
		options = {"x":x, "y":y};
		this.loaderBar = new LoaderBar(options);
		this.loaderBar.create();
		Game.getInstance().world.add(this.loaderBar.sprite);
	};
	
	MainScene.prototype.addText = function() {
		this.label = TextFactory.make(Game.getInstance().world.centerX - 300, 0, "Main menu");
		this.preloadLabel = TextFactory.make(Game.getInstance().world.centerX - 300, 50, "Loaded 0%");
		Game.getInstance().world.add(this.label);
		Game.getInstance().world.add(this.preloadLabel);
	};
	
	MainScene.prototype.addButtons = function() {
		this.startButton = new NavButton({"x":100, "y":200});
		this.tutorialButton = new BulbButton({"x":400, "y":200});
		this.startButton.create();
		this.tutorialButton.create();
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		this.tutorialButton.mouseUpSignal.add(this.tutorialButtonClicked, this);
		Game.getInstance().world.add(this.startButton.sprite);
		Game.getInstance().world.add(this.tutorialButton.sprite);
	};
	
	MainScene.prototype.loadProgress = function(data) {
		var p = Math.round(data.numLoaded * 100 / data.total);
		this.preloadLabel.text = "Loaded "+p+"%";
		this.loaderBar.goToPercent(p);
	};

	MainScene.prototype.create = function() {
		MainScene.created = true;
		Scene.prototype.create.call(this);
		this.preloadLabel.text = "Loaded 100%";
		this.loaderBar.goToPercent(100);
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
	
	

		



