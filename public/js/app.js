var app = {};

require.config({
	baseUrl: 'js/lib',
    paths: {
		app: '../app'
    }
});

require(['jquery', 'phaser', 'phaser-state-transition.min'], function () {
	
	require(['app/phaser/boot', 'app/phaser/implementations'], function (Boot) {
		
		Boot.start();
	
	});
	
});
