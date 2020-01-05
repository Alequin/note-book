Partial application is basically nested curry functions. 

In the following example the first and second call both return a function

```
const { orderBy } = require("lodash");

const sortArrayOfObjects = order => propertyName => array =>
  orderBy(array, [propertyName], [order]);

const sortDescending = sortArrayOfObjects("asc");
const sortByName = sortDescending("name");
const sortedArray = sortByName([{ name: "tim" }, { name: "sally" }]);
```