# Multipage Webpack Boilerplate

Multipack Webpack Plugin is a template for building web appllication that mixes a Webpack-powered frontend and a backend that generates multiple pages.

Features:

* Webpack configuration:
  * Css bundle
  * JavaScript bundle
  * Source maps
  * Compatible with `webpack-dev-server`
* Single JavaScript module per page
* Each backend page can reference a JavaScript module by adding a `data-module-id` attribute in its `<body>` element


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* NodeJs

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

-----

Clone the repo:

```bash
git clone blahblahblah
```

Initialize project

```bash
npm install
```

Run it in development mode. This will trigger the `webpack-dev-server`.

```bash
npm run dev
```

Load <http://localhost:8080> on a web browser to check the installation.


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Using it in your project

Multipage Webpack Boilerplate will create the structure of the frontend webapp for your


#### CSS

Css files are stored in the `css` directory. You add new css rules to the default `style.css` file or create a new css file inside the `css` directory.

To link a new css file (e.g. `myappstyles.css`) to the css distribution bundle you can use any of these approaches:

* Import css files in `js/app.js` to add it to the css bundle (see `/js/app.js`):

```js
import myappstyles from `./css/myappstyles.css`;
```

* Add an `@import` statement in `css/styles.css` (see `/css/styles.css` and `/css/imported-styles.css`)

### Using LESS and SASS

* [ ] TODO

### Add a js module

Each html page should have a `data-module-id` attribute attached to the `<body>` tag. This attribute should contain an unique page id that is used to locate the correct js module to invoke when the page is loaded. When the DOM finishes loading an `onReady` function will be executed in the javascript module that matches its `id` property with the content of the `data-module-id`.

For example: 

The `/page1.html` file

```html
<html>

<head>
    <title>Page1</title>
    <link rel="stylesheet" href="dist/styles.css">
</head>

<body data-module-id="page1-module">
    Page 1
    <script src="dist/bundle.js"></script>
</body>

</html>
```

will invoke the `/js/pages/page1.js`'s `onReady` function when the DOM finishes loading:

```js
module.exports = {
    id: 'page1-module',
    onReady: () => {
        console.log('Page 1!');
    }
}
```

### Add frontend dependencies

* [ ] TODO

#### jQuery

* [ ] TODO

#### Bootstrap

* [ ] TODO

### Integrate backend technology

* [ ] TODO

### Integrate `webpack-dev-server` with backend technology for development

* [ ] TODO

### Deploy your webapp

* [ ] TODO

## Deployment

To build the bundles execute

```bash
npm run build
```

## Built With

* [Webpack](https://webpack.js.org/) - Module bundler
* [NPM](https://www.npmjs.com/) - Dependency Management


## Authors

* **Álvaro Martín** - *Initial work* - [amrtn](https://github.com/amrtn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
