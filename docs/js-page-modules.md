# JavaScript page modules

## The problem

Sometimes a page needs to execute a js function on DOM load. Usually, the simplest way to solve this problem is creating a js for every page and link it from the page source. Sometimes one of these js files needs some other js library, so the page must also link to those additional js files for the library. As the size of the project increases this situation easily gets out-of-control and is difficult to keep track of the js files a single page needs.

## The solution

We implement a module system for the page-specific js code. By using webpack dependency navigator we ensure that the correct dependencies are met. As a bounus, webpack provides a bundling mechanism that merges all the needed js code for the whole site into a single file, making possible to cache it and also reducing the number of HTTP requests the client needs to perform.

## Discussion

### Page modules

The js code that is page-specific is located in the `/js/pages/` folder. Each js page module must follow the same structure:

```js
module.exports = {
    id: 'PAGE_ID', // Unique page idetificator
    onReady: () => {
        // Function that gets executed when the page's DOM finishes loading.
    }
}
```

Also, each HTML page should have a `data-module-id` attribute attached to the `<body>` tag. This attribute should contain the unique page identificator defined in the corresponding js page module. When the DOM finishes loading an `onReady` function will be executed in the javascript module that matches its `id` property with the content of the `data-module-id`.

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