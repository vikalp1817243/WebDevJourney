# 5. Functions

Functions are reusable blocks of code that perform a task or calculate a value.
In JavaScript, functions are first-class values: they can be stored in variables, passed to other functions, and returned from functions.

## Function declaration

A function declaration defines a named function.

```js
function add(a, b) {
  return a + b;
}
```

- Declarations are hoisted, which means the function name is available before the line where it appears.
- Use declarations for reusable named functions and when you want a clear function definition.

## Function expression

A function expression creates a function inside an expression and can be anonymous or named.

```js
const multiply = function (a, b) {
  return a * b;
};
```

- The variable is hoisted, but the function value is not assigned until the line is executed.
- Use function expressions when you want to assign a function to a variable or pass it as an argument.

## Arrow function expression

Arrow functions are a shorter syntax for functions.

```js
const subtract = (a, b) => a - b;
```

- If the function body is a single expression, the result is returned implicitly.
- For a multiline body, use braces and `return`.

```js
const greet = name => {
  const message = `Hello, ${name}`;
  return message;
};
```

- Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target`.
- They are not suitable as constructors and should not be used as object methods when `this` is needed.

## Calling functions

Functions are executed by using parentheses after the function name.

```js
const result = add(2, 3); // 5
```

### Function parameters and arguments

- Parameters are the names listed in the function definition.
- Arguments are the actual values passed when the function is called.

```js
function say(message) {
  console.log(message);
}
say('Hello');
```

### Default parameters

You can define default values for parameters.

```js
function greet(name = 'Guest') {
  return `Hi, ${name}`;
}
```

### Rest parameters

Rest parameters collect extra arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
```

### Spread syntax

Spread expands iterable values into individual elements.

```js
const values = [1, 2, 3];
console.log(sum(...values));
```

### `arguments` object

Non-arrow functions have access to the `arguments` object, which contains all passed values.

```js
function logAll() {
  console.log(arguments);
}
```

- Arrow functions do not have their own `arguments` object.
- Prefer rest parameters for new code.

## Function scope and closures

Functions create their own scope. A closure is created when a function remembers variables from the scope where it was defined.

```js
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

- Closures are useful for data encapsulation and creating private state.

## `this` in functions

### Regular function

The value of `this` depends on how the function is called.

```js
const obj = {
  value: 42,
  getValue() {
    return this.value;
  },
};
console.log(obj.getValue()); // 42
```

### Arrow function

An arrow function uses `this` from its surrounding scope.

```js
const obj = {
  value: 42,
  getValue: () => this.value,
};
console.log(obj.getValue()); // undefined
```

- Use regular functions for methods that need object-specific `this`.
- Use arrow functions for callbacks when you want to preserve the outer `this`.

## Higher-order functions

A higher-order function takes a function as an argument or returns a function.

```js
function map(array, transform) {
  const result = [];
  for (const item of array) {
    result.push(transform(item));
  }
  return result;
}

const doubled = map([1, 2, 3], n => n * 2);
```

- Common built-in higher-order functions are `map`, `filter`, `reduce`, and `forEach`.

## Methods and constructors

### Methods

A method is a function stored as an object property.

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
};
```

### Constructor functions

Constructor functions are called with `new` and create objects.

```js
function Person(name) {
  this.name = name;
}
const person = new Person('Jay');
```

- Arrow functions cannot be used as constructors.
- In modern code, classes are usually preferred for object creation.

## Async functions

Async functions return a promise and make asynchronous code look synchronous.

```js
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

- Use `try`/`catch` to handle errors in async functions.

## Best practices

- Prefer `const` for function bindings unless reassignment is needed.
- Keep functions small and single-purpose.
- Use descriptive parameter names.
- Avoid side effects when possible.
- Choose the right function form: declarations for named functions, expressions for callbacks, and arrow functions for lightweight inline behavior.

## Examples

```js
function add(a, b = 0) {
  return a + b;
}

const multiply = (a, b) => a * b;

const logger = message => {
  console.log('LOG:', message);
};

const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);
```
