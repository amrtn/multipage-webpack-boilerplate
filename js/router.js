var Router = function () {
    this.pageModules = extractPageModules();
}

/**
 * Finds and executes the appropriate js module accordin to the page id stored in the DOM.
 * 
 * @param {array} pageModules
 * @param {function} extractPageId - Function that will return the page id used to identify the 
 *      corresponding js module to be executed on DOM ready.
 */
Router.prototype.executePageModule = function () {
    pageId = getPageId();

    if (!pageId) {
        return;
    }

    matchedModuleNames = Object.keys(this.pageModules).filter((value, idx, arr) => {
        return this.pageModules[value].id === pageId;
    });

    if (!matchedModuleNames || matchedModuleNames.length == 0 || !matchedModuleNames[0]) {
        console.error('No page module found for page-id "' + pageId + "'");
        return null;
    }

    this.pageModules[matchedModuleNames[0]].onReady();
}

/**
 * Returns a context with all the js files in the `/js/pages/` directory. 
 * 
 * @private
 * @see https://webpack.js.org/guides/dependency-management/#context-module-api
 * @return {require.context}
 */
function extractPageModules() {
    // Load page modules
    var modules = {};

    function importAll(r) {
        r.keys().forEach(key => modules[key] = r(key));
    }

    importAll(require.context('./pages/', true, /\.js$/));
    // At build-time pageModules will be populated with all required modules.

    return modules;
}

/**
 * Gets the content of the `data-module-id` attribute of the body tag on the DOM.
 * 
 * @private
 * @returns {string} - The content of the `data-module-id` attribute of the body
 */
function getPageId() {
    var body = document.getElementsByTagName('body')[0];
    var pageId = body.dataset.moduleId;
    if (!pageId) {
        console.log('The page\'s body element has no "data-module-id" attribute. ' +
            'No page-specific js code will be executed');
    }
    return pageId;
}


module.exports = Router;