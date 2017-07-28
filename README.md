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

* Import css files in `js/app.js` to add it to the css bundle:

```js
import myappstyles from `./css/myappstyles.css`;
```

* Add an `@import` statement in `css/styles.css`

### Using LESS and SASS

* [ ] TODO

### Add a js module

For each page that needs to execute js code add a new file in `js/pages`.

### Connect a HTML page with its js module

* [ ] TODO

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

### Deploy your weebapp

* [ ] TODO

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
