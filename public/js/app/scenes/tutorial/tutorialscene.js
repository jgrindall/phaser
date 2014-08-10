
define(['app/scenes/scene', 'app/preloader/preloader', 'app/components/buttons/navbutton', 'app/utils/textfactory', 'app/game'],function(Scene, Preloader, NavButton, TextFactory, Game){
	
	var TutorialScene  = function(key){
		Scene.call(this, key);
	};

	TutorialScene.prototype = Object.create(Scene.prototype);
	TutorialScene.prototype.constructor = TutorialScene;

	TutorialScene.prototype.create = function() {
		this.label = TextFactory.make(Game.getInstance().world.centerX - 300, 50, "Tutorial");
		this.startButton = new NavButton();
		this.startButton.create();
		this.startButton.mouseUpSignal.add(this.startButtonClicked, this);
		Game.getInstance().world.add(this.startButton.sprite);
		Game.getInstance().world.add(this.label);
	};

	TutorialScene.prototype.startButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	TutorialScene.prototype.tutorialButtonClicked = function(data) {
		this.navigationSignal.dispatch({"key":this.key});
	};

	TutorialScene.prototype.update = function() {
		Scene.prototype.update.apply(this, arguments);
	};

	TutorialScene.prototype.shutdown = function() {
		Scene.prototype.shutdown.apply(this, arguments);
	};

	return TutorialScene;

});
	
	





