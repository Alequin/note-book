- Create a new npm package
- Make a new file `./bin/index.js` containing the following

```js
#!/usr/bin/env node

console.log("Hello!");
```

- Point the `main` property at the file `./bin/index.js`
- In the `package.json` add

```json
  "bin": {
    "<script-name>": "./bin/index.js"
  },
```

- Install the package globally with `npm i -g .`
- Call `<script-name>` in your terminal

Source: https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
