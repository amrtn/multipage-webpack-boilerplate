var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapConfig = require('./webpack.bootstrap.config');
const merge = require('webpack-merge');


// Output extracted CSS to a file
const extractTextPlugin = new ExtractTextPlugin({
    filename: 'styles.css',
});


const generalConfig = {
    devtool: 'source-map',
    entry: './src/client/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/src/dist'
    },
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, './src'), // New
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                use: 'css-loader?sourceMap',
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [extractTextPlugin]
};

// Using a constant here allows us to console.log the merged configuration
const fullConfig = merge(generalConfig, bootstrapConfig);

module.exports = fullConfig;