
define(['app/consts/appconsts','app/scenes/game/gamescene','app/scenes/comms/commscene','app/scenes/main/mainscene','app/scenes/tutorial/tutorialscene','app/scenes/levels/levelsscene'], function(AppConsts, GameScene, CommScene, MainScene, TutorialScene, LevelsScene ){
	
	"use strict";
	
	var SceneFactory = function(){

	};
	
	SceneFactory.getForKey = function(key){
		var _class = SceneFactory.getClassForKey(key);
		return new _class(key);
	};
	
	SceneFactory.getClassForKey = function(key){
		if(key === AppConsts.GAME_SCENE){
			return GameScene;
		}
		else if(key === AppConsts.COMM_SCENE){
			return CommScene;
		}
		else if(key === AppConsts.MAIN_SCENE){
			return MainScene;
		}
		else if(key === AppConsts.LEVELS_SCENE){
			return LevelsScene;
		}
		else if(key === AppConsts.TUTORIAL_SCENE){
			return TutorialScene;
		}
	};
	
	return SceneFactory;

});
	
	