var webpack = require( 'webpack' );
var path = require( 'path' );

var BUILD_DIR = path.resolve( __dirname, 'dist/' );
var APP_DIR = path.resolve( __dirname, 'src/' );

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: APP_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;

