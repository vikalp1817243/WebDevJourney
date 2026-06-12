# 2. Data Types

## JavaScript primitive types

- `Number`: all numeric values are one type, including integers and floats.
- `String`: text values inside single, double, or backtick quotes.
- `Boolean`: `true` or `false`.
- `Null`: explicitly empty value.
- `Undefined`: value not assigned.
- `BigInt`: large integers beyond `Number.MAX_SAFE_INTEGER`.
- `Symbol`: unique and immutable identifiers.

```js
typeof 123; // "number"
typeof 9.99; // "number"
typeof 'hi'; // "string"
typeof true; // "boolean"
typeof null; // "object"  (historic JS quirk)
typeof undefined; // "undefined"
typeof 10n; // "bigint"
```

## Important JS type details

### `Number` is not separate int/float

- JS uses a single numeric type for integers and decimal values.
- `0.1 + 0.2` is not exactly `0.3` because numbers are stored in binary floating-point.

```js
0.1 + 0.2; // 0.30000000000000004
```

- In languages like Java, C#, and C++, `int` and `float`/`double` are distinct types.

### `null` vs `undefined`

- `undefined` means a variable exists but has no value yet.
- `null` means a variable has been intentionally set to no value.

```js
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

- In TypeScript or strongly typed languages, `null` and `undefined` are often separate types and handled more strictly.

### Strings and interpolation

- Strings can be concatenated with `+`, but template literals are easier for interpolation.

```js
const name = 'Jay';
const message = `Hello, ${name}!`;
```

- In Python, string interpolation uses `f'...'`, and in Java/C# it uses other syntax such as `String.format` or `$"..."`.

### `BigInt` for very large integers

- Use `n` suffix to create a `BigInt`.

```js
const big = 9007199254740992n;
```

- `BigInt` cannot be mixed with regular `Number` values in arithmetic without explicit conversion.

### `Symbol` uniqueness

- `Symbol()` always creates a unique value, even with the same description.

```js
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false
```

- Symbols are often used for object property keys when you need a property that won't conflict with others.

## Object and structured types

- `Object`, `Array`, `Function`, `Date`, `RegExp`, and more are reference types.
- `typeof []` returns `"object"` and `Array.isArray([])` is the reliable way to detect arrays.

```js
Array.isArray([1, 2, 3]); // true
```

- In many languages, arrays and objects have clearer type distinctions than JS.

## Truthy and falsy values

- JS has concept of truthy and falsy values when using boolean contexts.
- Falsy values: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`.
- Everything else is truthy.

```js
if ('hello') { console.log('truthy'); }
if (0) { console.log('this won\'t run'); }
```

- Many other languages also coerce values to boolean, but JS has a broader set of falsy values.
## Keywords and declaration choices

### `var`

- `var` declares a function-scoped or global variable.
- It is hoisted, meaning the declaration is moved to the top of the function scope.
- `var` can be re-declared and updated.

```js
var x = 1;
var x = 2;
console.log(x); // 2
```

- Avoid `var` in modern code unless you need legacy compatibility.

### `let`

- `let` declares a block-scoped variable.
- It can be updated but not re-declared in the same scope.
- It is not accessible before initialization (temporal dead zone).

```js
let count = 0;
count += 1;
```

- Use `let` when the value needs to change.

### `const`

- `const` declares a block-scoped local variable.
- The variable must be initialized when declared.
- The binding cannot be reassigned after initialization.
- `const` creates an immutable reference, not an immutable value.

```js
const name = 'Jay';
name = 'Sam'; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // allowed
console.log(arr); // [1, 2, 3, 4]
```

- For objects and arrays, properties and elements can be changed, but the variable cannot be reassigned to a new object or array.

```js
const obj = { value: 1 };
obj.value = 2; // allowed
obj = { value: 3 }; // TypeError
```

- `const` declarations are not accessible before the declaration is reached; they use the temporal dead zone like `let`.
- At the top level of a script, `const` does not create a property on `globalThis`.
- `const` declarations cannot be redeclared in the same scope.

- Use `const` by default, and switch to `let` only when you need to reassign the variable.

### `null`

- `null` is an explicit assignment that means "no value".
- Use it when you intentionally clear a variable or indicate an empty value.

```js
let user = null;
```

- `null` is distinct from `undefined`, which means a value is missing.

### `undefined`

- Variables are `undefined` when declared but not initialized.
- Functions return `undefined` when no return value is provided.

```js
let value;
console.log(value); // undefined
```

- Do not assign `undefined` intentionally in modern code; use `null` when you need an explicit empty state.
## `console.log` vs `alert`

- `console.log()` writes messages to the browser console or developer tools.
- `alert()` shows a blocking dialog box to the user.

```js
console.log('value:', value);
alert('Hello!');
```

- `console.log` is for debugging and logging; it does not interrupt program execution.
- `alert` pauses execution until the user dismisses the dialog and is generally not used in production.

### Practical differences

- `console.log` works in browser dev tools and Node.js.
- `alert` only works in browser environments and is synchronous/blocking.
- `console.log` can show objects and inspect properties; `alert` only displays a string.
- `alert` may be disabled or ignored by browser settings and is intrusive for users.

## Example — numbers and string interpolation

```js
const price = 9.99;
const qty = 3;
console.log(`Total: $${price * qty}`);
```

## Cross-language reminders

- JS has dynamic typing and fewer primitive categories than languages like Java and C#.
- `typeof null === 'object'` is a JS quirk that does not occur in most statically typed languages.
- Python also has dynamic types, but it distinguishes `int`, `float`, and `complex` numeric types more clearly.
- In Java/C#/C++, the console output and UI dialogs are separate APIs, unlike JS where `console.log` and `alert` are browser-specific functions.
