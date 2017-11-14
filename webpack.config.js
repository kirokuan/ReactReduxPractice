var path = require('path');

var config = {
    entry: [path.resolve(__dirname, 'app/main.jsx')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, exclude: "/node_modules/",
            loaders: ['babel-loader'],
            
        }]
    },
    resolve: {
        extensions: [  '.js','jsx'] // <-- Had to add the .js one
    }
};

module.exports = config;