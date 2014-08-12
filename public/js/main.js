'use strict';

require.config({
	shim: {
		
	},
	paths: {
		jquery: 					'../bower_components/jquery/jquery',
		phaser: 					'lib/phaser.min',
		phaserstatetrans: 			'lib/phaser-state-transition.min'
	}
});

require(['phaser', 'app/boot/boot', 'app/utils/implementations'],

function (Phaser, Boot) {
	
	Boot.start();
	
});

