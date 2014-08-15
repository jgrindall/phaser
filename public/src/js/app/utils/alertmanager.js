
define(['app/game', 'app/components/alert', 'app/scenes/game/gamepausemenu', 'app/scenes/game/gameovermenu', 'app/components/growl'], 

function(Game, Alert, GamePauseMenu, GameOverMenu, Growl){
	
	"use strict";
	
	var AlertManager  = function(){
		
	};
	
	AlertManager.close = function(){
		if(AlertManager.alert){
			AlertManager.alert.selectSignal.removeAll(AlertManager);
			AlertManager.alert.destroy();
			AlertManager.alert = null;
			Game.alertSignal.dispatch({"show":false});
		}
	};
	
	AlertManager.alertClick = function(){
		AlertManager.closeAlert();
	};
	
	AlertManager.make = function(ClassRef, label, callback){
		var x, y;
		x = (Game.w() - ClassRef.WIDTH)/2;
		y = (Game.h() - ClassRef.HEIGHT)/2;
		AlertManager.close();
		AlertManager.alert = new ClassRef({"label":label, "bounds":{"x":x, "y":y, "w":ClassRef.WIDTH, "h":ClassRef.HEIGHT}});
		Game.getInstance().world.add(AlertManager.alert.group);
		AlertManager.alert.selectSignal.add($.proxy(this.buttonClick, this, callback));
		Game.alertSignal.dispatch({"show":true});
	};
	
	AlertManager.buttonClick = function(callback, data){
		AlertManager.close();
		if(callback){
			callback(data);
		}
	};
	
	AlertManager.makeGrowl = function(label, callback){
		AlertManager.make(Growl, label, callback);
	};
	
	AlertManager.makePauseMenu = function(label, callback){
		AlertManager.make(GamePauseMenu, label, callback);
		Game.pausePhysics();
	};
	
	AlertManager.makeGameOverMenu = function(label, callback){
		AlertManager.make(GameOverMenu, label, callback);
		Game.pausePhysics();
	};
	
	AlertManager.makeAlert = function(label, callback){
		AlertManager.make(Alert, label, callback);
	};
	
	return AlertManager;

});
	
	

