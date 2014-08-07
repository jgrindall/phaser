var app = {};

require.config({
	baseUrl: 'js/lib',
    paths: {
		app: '../app'
    }
});

require(['jquery', 'phaser', 'phaser-state-transition.min'], function () {
	
	require(['app/boot/boot', 'app/utils/implementations'], function (Boot) {
		
		Boot.start();
	
	});
	
});
