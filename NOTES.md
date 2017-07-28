# Webpack-learn notes

2017-07-15 08:58:17

This project is a simple proof of concept to expore the on the fly insertion of styles on the html
file.

## Installing webpack & setting up project

```bash
npm install -g http-server

npm init -y
npm install webpack --save-dev
npm install --save-dev css-loader style-loader
npm install --save-dev webpack-dev-server

node node_modules/webpack/bin/webpack.js
node node_modules/webpack-dev-server/bin/webpack-dev-server.js
```

Looks like the `style-loader` module only works with `webpack-dev-server`

2017-07-17 19:20:36

## ExtractTextPlugin

[ExtractTextPlugin](https://www.npmjs.com/package/extract-text-webpack-plugin)

```bash
npm install extract-text-webpack-plugin --save-dev
```

If there are multiple linked css files they wil be aggregated in a single file configured with the `filename` argument in the plugin instatiation.

```js
// Output extracted CSS to a file
const extractTextPlugin = new ExtractTextPlugin({
    filename: 'styles.css',
});
```

The `filename` argument is relative to the global `output.path` configuration for webpack.

## Source maps

2017-07-18 17:22:01

Two types of source maps:

* js source maps
* css source maps

Once configured in webpack you don't need to change anything in Chrome DevTools to start seeing the correct files.

Depending on the type of source map configured in the `devtool` option, it can be used in production or only with `webpack-dev-server`. See [table](https://webpack.js.org/configuration/devtool/#devtool).

### js source maps

To enable JavaScript source maps we should configure the `devtool` property on the root webpack config object.

```js
module.exports = {
    devtool: 'source-map',
    ...
```

### css source maps

Add the `?sourceMap` option to the `css-loader` loader and also to every other css/sass loader you use.

```js
    ...
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                use: 'css-loader?sourceMap',
                fallback: 'style-loader'
            })
        }]
    },
    ...
```

## Requiring all files in a directory 

This is used to implement a module system for multipage applications. See [require.context API documentation](https://webpack.js.org/guides/dependency-management/#require-context)

> A context module exports a (require) function that takes one argument: the request.
>
> The exported function has 3 properties: resolve, keys, id.
>
> * `resolve` is a function and returns the module id of the parsed request.
>
> * `keys` is a function that returns an array of all possible requests that the context module can handle.
>
> This can be useful if you want to require all files in a directory or matching a pattern, Example:
>
> ```js
> function importAll (r) {
>   r.keys().forEach(r);
> }
>
> importAll(require.context('../components/', true, /\.js$/));
> ```
>
> ```js
> var cache = {};
>
> function importAll (r) {
>   r.keys().forEach(key => cache[key] = r(key));
> }
>
> importAll(require.context('../components/', true, /\.js$/));
> // At build-time cache will be populated with all required modules.
> ```
>
> * `id` is the module id of the context module. This may be useful for module.hot.accept.

2017-07-28 05:09:55

Changed the focus of the project to a boilerplate that helps to start building webapps with mvc backends that generate multiple html pages. Each html page will execute a webpack js module. The HTML `<body>` element references the specific js module to execute. Webpack is used to bundle all the js and css files for production. Sourcemaps and `webpack-dev-server` are used to ease front-end code development.

