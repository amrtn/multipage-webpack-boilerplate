/**
 * Finds and executes the appropriate js module accordin to the page id stored in the DOM.
 * 
 * @param {array} pageModules
 * @param {function} extractPageId - Function that will return the page id used to identify the 
 *      corresponding js module to be executed on DOM ready.
 */
function executePageModule(pageModules, extractPageId) {
    pageId = extractPageId();

    if (!pageId) {
        return;
    }

    matchedModules = Object.keys(pageModules).reduce((prev, curr, idx, arr) => {
        if (typeof prev === 'string') {
            // When the prev var is a string we are considering first element of the array
            if (pageModules[prev].id === pageId)     {
                return pageModules[prev];
            }
        } else if (prev) {
            // If the prev var is not a string and not null, we have already located the desired module.
            return prev;
        }
        if (pageModules[curr].id === pageId) {
            return pageModules[curr];
        }
        return null;
    });

    if(!matchedModules) {
        console.error('No page module found for page-id "' + pageId + "'");
    }

    matchedModules.onReady();
    
}


module.exports = {
    executePageModule: executePageModule
}