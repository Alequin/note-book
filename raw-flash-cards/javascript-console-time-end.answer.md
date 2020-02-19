`console.time(<string>)` and `console.timeEnd(<string>)`

Using time and timeEnd will provide a report on how long the code between the two calls took. Both functions take a key, to ensure the correct report is given both must be provided the same key

```
const wait = () => ;

(async () => {
  console.time("my-key");
  await new Promise(resolve => setTimeout(resolve, 10000))
  console.timeEnd("my-key");
})();

=> key: 10012.142ms
```