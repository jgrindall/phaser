({
    appDir: '.',
    baseUrl: './js',
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore',
        phaser: '../bower_components/phaser/build/phaser'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        phaser: {
            exports: 'Phaser'
        }
    }
})