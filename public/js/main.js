'use strict';

var app = {};

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		phaser: {
			exports: 'Phaser'
		}
	},
	paths: {
		jquery: 					'../bower_components/jquery/jquery',
		underscore: 				'../bower_components/underscore/underscore',
		phaser: 					'../bower_components/phaser/build/phaser',
		phaserstatetransition: 		'../bower_components/phaser-state-transition/build/phaser-state-transition.min'
	}
});

require(['phaser'], function () {
	
	require(['app/boot/boot', 'phaserstatetransition', 'app/utils/implementations'], function (Boot) {
		
		Boot.start();
	
	});
	
});

