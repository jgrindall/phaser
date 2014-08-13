
define(function(require, exports){
	
	"use strict";
	
	var Storage = function(){
		
	};
	
	Storage.prototype.store = function(key, data){
		localStorage.setItem(key, data);
	};
	
	Storage.prototype.load = function(key){
		return localStorage.getItem(key);
	};
	
	Storage.getInstance = function(){
		if(!Storage.instance){
			Storage.instance = new Storage();
		}
		return Storage.instance;
	};
	
	return Storage;
	
});

