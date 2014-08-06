app = app || {};


define("Boot", ['Phaser'],
  function( Phaser ) {

    app.Boot= function ( game ){


    };


    app.Boot.prototype = {
      
      preload: function(){},
      create: function(){},
      update: function(){},

    }
  }
);

define(function (require) {

    "use strict";

    var $           = require('jquery'),
        
		
		
		var v = Backbone.View.extend({

	        render: function () {
	            this.$el.html(template());
	            return this;
	        }

	    });
	
		return v;
	
});


app.sceneManager = new app.SceneManager();
var config = {"create":$.proxy(app.sceneManager.create, app.sceneManager), "preload":$.proxy(app.sceneManager.preload, app.sceneManager) };
app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', config);



$(document).ready(function(){
	app.sceneManager = new app.SceneManager();
	var config = {"create":$.proxy(app.sceneManager.create, app.sceneManager), "preload":$.proxy(app.sceneManager.preload, app.sceneManager) };
	app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', config);
});


