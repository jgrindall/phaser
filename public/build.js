({
    baseUrl: 'js',
    out: 'main-build.js',
    fileExclusionRegExp: /^(r|build)\.js$/,
    removeCombined: true,
    include: ['main'],
    optimize:'none',
    paths: {
        jquery: 			'../bower_components/jquery/jquery',
        phaser: 			'lib/phaser.min',
        phaserstatetrans: 	'lib/phaser-state-transition.min'
    }
})