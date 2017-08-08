// Example: loading multiple css files gets them bundled in the same css file in dist folder.
import styles from '../css/styles.css';
import styles2 from '../css/styles2.css';

// Custom router class to invoke the appropriate onReady function when the document finishes loading
import Router from './router';

// Resolve a promise on document ready
import ready from 'document-ready-promise';

// Add bootstrap resources
const packageJSON = require('../package.json');
if (packageJSON &&
    packageJSON.multipageWebpackBoilerplate &&
    packageJSON.multipageWebpackBoilerplate.useBootstrap3) {

    require('bootstrap-loader');
}


// Page js modules: Invoke the correct onReady funciton based on data-module-id attribute on 
// `<body>` tag
var router = new Router();
ready().then(() => {
    router.executePageModule();
});