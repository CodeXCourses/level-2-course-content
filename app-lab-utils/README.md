# App Lab Utils

This module contains a set of utility functions adapted from Code.org App Lab to smoothen the transition to VS Code or other IDE.

### Summary

In Code.org, JavaScript code blocks are used. In VS Code, JavaScript text is used. To smoothen the transition, this module contains that same code and syntax as Code.org App Lab.

In an IDE like VS Code, to change the color of a button to red, the code looks like this:

```js
const button = document.getElementById("button1");
button.style["background-color"] = "red";
//ALTERNATIVE: button.style.backgroundColor = "red";
```

In Code.org, to change the color of a button to red, the code block produces this:

```js
setProperty("button1", "background-color", "red");
```

This App Lab module makes it possible to use code from Code.org in VS Code, thus smoothening the transition from code blocks to code text. An App Lab project could more easily be migrated to VS Code because most of the code would be the same.

## How to connect to an HTML file

1. Download `utils.js`
2. Connect it to an HTML file with the `script` tag:

```html
<head>
  <script src="utils.js"></script>
</head>
```

## Usage

1. Create a JavaScript file. Example: `index.js`
2. Use code from `utils.js`. Example: `setProperty("introId", "text", "Hello, World!")`
3. Connect it to an HTML file with `defer`. Example:

```html
<head>
  <script src="utils.js"></script>
  <script src="index.js" defer></script>
</head>
```

### Examples

```js
setProperty("introId", "text", "Hello, World!");
```

```js
onEvent("buttonId", "click", function () {
  console.log("Button was clicked!");
});
```

## How to connect like a CDN

1. Copy the file to a public online repository.
2. In the online repository, click on the file.
3. Copy the link or URL address to the file.
4. Open the website [http://githack.com](http://githack.com)
5. Paste in the link.
6. Copy the URL for development.
7. Connect it to an HTML file with the `script` tag. Example:

```html
<head>
  <script src="https://raw.githack.com/<user>/<repo>/refs/heads/main/utils.js"></script>
</head>
```

## GitHack as a temporary CDN

[GitHack](https://raw.githack.com/) will serve the raw GitHub file. Example raw GitHub link:
`https://raw.githubusercontent.com/<user>/<repo>/refs/heads/main/utils.js`

- GitHack.com is used to serve the utilities direct from the GitHub repository.
- If changes are applied to the repository, changes are applied to the served file. Changes may take a few minutes to apply.
- If the utilities are deleted from the repository, there will be no file to serve.
- This is useful for temporarily serving files, compared to regular CDNs which permanently serve files.
