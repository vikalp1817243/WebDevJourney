# 1. Basics & Syntax

- JavaScript runs in browsers and Node.js.
- Case-sensitive, semicolon optional but recommended for clarity.

Example:

```js
// log to console
console.log('Hello, JavaScript!');

// variable declaration
let a = 5;
const name = 'Jay';
```

## Variable rules
- `const` for values that won't be reassigned (object contents can still change).
- `let` for block-scoped mutable values.
- `var` is function-scoped — avoid due to hoisting quirks.
