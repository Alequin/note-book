- This keyword binding

  - In arrow functions `this` is lexically bound (`this` refers to its parent)

```
this.number = 52;
const foo = () => this.number;
function bar() {
  return this.number;
}

console.log(foo()); 
// 52
console.log(bar()); 
// undefined
```

---

- The array `arguments` is not available in arrow functions

```
function foo() {
  return arguments;
}
const bar = () => arguments;

console.log(bar(1, 2, 3, 4)); 
// { '0': 1, '1': 2, '2': 3, '3': 4 }

console.log(foo(1, 2, 3, 4)); 
// Uncaught ReferenceError: arguments is not defined
```

  - If the parent of the arrow function has an `arguments` array this is accessible

  ```
  function baz(){return () => arguments}

  console.log(baz(4, 5, 6)()) 
  // { '0': 4, '1': 5, '2': 6 }
  ```

---

- Arrow functions can not be called with the keyword `new` 