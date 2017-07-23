import styles from '../css/styles.css';
import styles2 from '../css/styles2.css';

import Router from './router';

// Load page modules
var pageModules = {};

function importAll(r) {
    r.keys().forEach(key => pageModules[key] = r(key));
}

importAll(require.context('./pages/', true, /\.js$/));
// At build-time pageModules will be populated with all required modules.

function extractPageId() {
    var body = document.getElementsByTagName('body')[0];
    var pageId = body.dataset.moduleId;
    if (!pageId) {
        console.log('The page\'s body element has no "data-module-id" attribute. ' +
            'No page-specific js code will be executed');
    }
    return pageId;
}

Router.executePageModule(pageModules, extractPageId);