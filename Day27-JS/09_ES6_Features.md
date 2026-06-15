# 9. ES6+ Features (short)

- Template literals: `` `Name: ${name}` ``.
- Destructuring: objects and arrays.
- Spread / Rest: `...`.
- Default parameters.
- Arrow functions.
- `let` / `const`.
- Promises, `async`/`await`.
- Classes (syntactic sugar over prototypes).

Examples:

```js
// destructure
const { name, age } = user;

// spread
const a = [1,2];
const b = [...a, 3]; // [1,2,3]

// class
class Person {
  constructor(name) { this.name = name; }
  say() { return `Hi ${this.name}`; }
}

// async
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  return res.json();
}
```
