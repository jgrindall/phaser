$(document).ready(function(){
	app.sceneManager = new app.SceneManager();
	var config = {"create":$.proxy(app.sceneManager.create, app.sceneManager), "preload":$.proxy(app.sceneManager.preload, app.sceneManager) };
	app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', config);
});


