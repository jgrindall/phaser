define(['app/consts/leveldata', 'app/scenes/game/gamemode', 'app/commsdata'],

function(LevelData, GameMode, CommsData) {
	
	"use strict";
	
	var LocData = function(){
		this.level = null;
		this.mode = GameMode.UNKNOWN;
	};
	
	LocData.prototype.getMode = function(){
		return this.mode;
	};
	
	LocData.prototype.setMode = function(mode){
		this.mode = mode;
	};

	LocData.prototype.setLocation = function(data){
		this.page = data.page;
		this.level = data.level;
		this.levelData = LevelData.getLevel(this.page, this.level);
		CommsData.getInstance().init(this.levelData);
	};
	
	LocData.getInstance = function(){
		if(!LocData.instance){
			LocData.instance = new LocData();
		}
		return LocData.instance;
	};

  	return LocData;
});




