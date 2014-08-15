
define(['app/game', 'app/scenes/game/player', 'app/scenes/game/enemies', 'app/scenes/game/killareas', 'app/scenes/game/gunners', 'app/scenes/game/bullets', 'app/components/background', 'app/scenes/game/stars', 'app/commsdata', 'app/locdata', 'app/scenes/game/platforms', 'app/scenes/game/home', 'app/scenes/game/gamemode'],

function(Game, Player, Enemies, KillAreas, Gunners, Bullets, Background, Stars, CommsData, LocData, Platforms, Home, GameMode){
	
	"use strict";
	
	var GameView  = function(options){
		this.options = options;
		this.deadSignal = new Phaser.Signal();
	};
	
	GameView.prototype.controlUp = function(data) {
		this.player.controlUp(data);
	};
	
	GameView.prototype.controlDown = function(data) {
		
	};
	
	GameView.prototype.addBg = function() {
		this.bg = new Background({"asset":'background'});
		this.bg.create();
		Game.getInstance().world.add(this.bg.sprite);
	};
	
	GameView.prototype.addPlatforms = function() {
		this.platforms = new Platforms(this.options.tiles);
		this.platforms.create();
		Game.getInstance().world.add(this.platforms.tileMapLayer);
	};
	
	GameView.prototype.addPlayer = function() {
		this.player = new Player(this.options.hero);
		this.player.create();
		this.player.deadSignal.add(this.onDead, this);
		Game.getInstance().world.add(this.player.sprite);
	};
	
	GameView.prototype.onDead = function(data){
		this.player.destroy();
		this.player.deadSignal.removeAll(this);
		this.player = null;
		this.deadSignal.dispatch();
	};
	
	GameView.prototype.addBullets = function(){
		this.bullets = new Bullets();
		Game.getInstance().world.add(this.bullets.group);
	};
	
	GameView.prototype.addStars = function() {
		this.stars = new Stars(this.options.stars);
		Game.getInstance().world.add(this.stars.group);
	};
	
	GameView.prototype.addEnemies = function() {
		this.enemies = new Enemies(this.options.enemies);
		Game.getInstance().world.add(this.enemies.group);
	};
	
	GameView.prototype.addHome = function() {
		this.home = new Home(this.options.home);
		Game.getInstance().world.add(this.home.sprite);
	};
	
	GameView.prototype.addKillAreas = function() {
		this.killareas = new KillAreas(this.options.killareas);
		Game.getInstance().world.add(this.killareas.group);
	};
	
	GameView.prototype.shoot = function(data) {
		var bullet = this.bullets.getFirstExists();
		if(bullet){
			bullet.reset(data.x, data.y);
			bullet.body.allowGravity = false;
			bullet.body.velocity.x = -300;
			bullet.body.velocity.y = 0;
		}
	};
	
	GameView.prototype.addGunners = function() {
		this.gunners = new Gunners(this.options.gunners);
		this.gunners.shootSignal.add(this.shoot, this);
		Game.getInstance().world.add(this.gunners.group);
	};
	
	GameView.prototype.create = function() {
		this.addBg();
		this.addPlatforms();
		this.addPlayer();
		this.addBullets();
		this.addGunners();
		this.addEnemies();
		this.addHome();
		this.addKillAreas();
		this.addStars();
		Game.getInstance().camera.follow(this.player.sprite);
	};
	
	GameView.prototype.collide = function() {
		var physics = Game.getPhysics();
		if(this.player && !this.player.dead){
	   		physics.collide(this.player.sprite, this.platforms.tileMapLayer);
	   		physics.overlap(this.player.sprite, this.stars.group, this.collectStar, null, this);
	   		physics.overlap(this.player.sprite, this.home.sprite, this.collectHome, null, this);
			physics.overlap(this.player.sprite, this.enemies.group, this.hitEnemy, null, this);
			physics.overlap(this.player.sprite, this.killareas.group, this.hitKillArea, null, this);
	   	}
	    physics.collide(this.killareas.group, 	this.platforms.tileMapLayer);
	    physics.collide(this.enemies.group, 	this.platforms.tileMapLayer);
		physics.collide(this.stars.group, 		this.platforms.tileMapLayer);
	};
	
	GameView.prototype.update = function() {
	    this.collide();
	    if(this.player){
			this.player.update();
		}
		this.stars.update();
		this.enemies.update();
		this.gunners.update();
	};

	GameView.prototype.collectStar = function(player, star){
		star.kill();
	};
	
	GameView.prototype.collectHome = function(player, home){
		alert("home");
	};
	
	GameView.prototype.hitEnemy = function(player, enemy){
		//console.log("dead - enemy");
		this.player.kill();
	};
	
	GameView.prototype.hitKillArea = function(player, killArea){
		//console.log("dead - kill");
		//this.player.kill();
	};

	GameView.prototype.destroy = function() {
		this.bg.destroy();
		this.platforms.destroy();
		if(this.player){
			this.player.destroy();
		}
		this.bg = null;
		//TODO  - more
		this.platforms = null;
		this.player = null;
	};
	
	return GameView;

});
	
