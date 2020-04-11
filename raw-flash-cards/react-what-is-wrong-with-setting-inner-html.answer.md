## What is dangerouslySetInnerHTML?

`dangerouslySetInnerHTML` is a prop available on react components for rendering stringified html into your React project

## Why is it discouraged

Setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.

[React Docs on dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

## What alternatives are there

There are npm packages available for parsing HTML into react components.

[NPM react html parser](https://www.npmjs.com/package/react-html-parser)
