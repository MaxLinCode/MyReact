const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: './src/app.jsx',
    output:{
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: './www',
        stats: 'minimal'
    }

};

