var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// Output extracted CSS to a file
const extractTextPlugin = new ExtractTextPlugin({
    filename: 'styles.css',
});


module.exports = {
    devtool: 'source-map',
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'), // New
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
}