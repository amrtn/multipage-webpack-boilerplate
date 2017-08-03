module.exports = {
    module: {
        rules: [{
                // Load glyphicons
                test: /\.(woff2?|svg)$/,
                use: 'url-loader?limit=10000'
            }, {
                // Load glyphicons
                test: /\.(ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                // jQuery
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            },



        ]
    }
}