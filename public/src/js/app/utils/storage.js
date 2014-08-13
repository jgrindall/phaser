
define([],

function(){
	
	"use strict";
	
	var Storage = function(){
		this.cache = [];
		this.persistence = localStorage;
	};
	
	Storage.LEVEL_PROGESS_KEY = "levelData";
	
	Storage.DEFAULT_PROGRESS = [[0,0,0,0,0,0,0,0,0], [1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2]];
	
	Storage.prototype.init = function(){
		this.saveForKey(Storage.LEVEL_PROGESS_KEY, Storage.DEFAULT_PROGRESS);
	};
	
	Storage.prototype.saveForKey = function(key, data){
		this.persistence.setItem(key, data);
		this.addToCache(key, data);
	};
	
	Storage.prototype.loadAllLevelData = function(){
		return this.getForKey(Storage.LEVEL_PROGESS_KEY);
	};
	
	Storage.prototype.setLevelDataForPageAndLevel = function(page, level, obj){
		var levelData = this.loadLevelDataForPage(page);
		levelData[level] = obj;
		this.saveForKey(Storage.LEVEL_PROGESS_KEY, levelData);
	};
	
	Storage.prototype.loadLevelDataForPageAndLevel = function(page, level){
		var levelData = this.loadLevelDataForPage(page);
		return levelData[level];
	};
	
	Storage.prototype.loadLevelDataForPage = function(page){
		var levelData = this.loadAllLevelData();
		return levelData[page];
	};
	
	Storage.prototype.addToCache = function(key, data){
		this.cache[key] = data;
	};
	
	Storage.prototype.getForKey = function(key){
		var data;
		data = this.cache[key];
		if(!data){
			data = this.persistence.getItem(key);
			this.addToCache(key, data);
		}
		return data;
	};
	
	Storage.getInstance = function(){
		if(!Storage.instance){
			Storage.instance = new Storage();
			Storage.instance.init();
		}
		return Storage.instance;
	};
	
	return Storage;
	
});

