# 6. Arrays

Arrays are ordered collections of values. In JavaScript they are dynamic, can hold mixed types, and are reference types (assigning or passing an array copies the reference, not the contents).

## Creating arrays

```js
// literal
const a = [1, 2, 3];

// constructor
const b = new Array(3); // length 3 (sparse)

// Array.of / Array.from
const c = Array.of(1, 2, 3);
const fromStr = Array.from('abc'); // ['a','b','c']
```

## Accessing values & length

```js
const arr = ['x', 'y', 'z'];
arr[0]; // 'x'
arr.length; // 3
arr[arr.length - 1]; // last element

// Negative indices are not supported natively (use at())
arr.at(-1); // 'z'
```

## Mutating vs non-mutating methods

- Mutating (change original): `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.
- Non-mutating (return new array): `map`, `filter`, `slice`, `concat`.

Examples:

```js
const nums = [1, 2, 3];
nums.push(4); // nums => [1,2,3,4]
const doubled = nums.map(n => n * 2); // doubled => [2,4,6,8], nums unchanged
const part = nums.slice(1, 3); // [2,3]
nums.splice(1, 1); // removes 1 element at index 1 => nums becomes [1,3,4]
```

## Common useful methods (short reference)

- `forEach(cb)` — run `cb(value, index, array)` for each item (no return).
- `map(cb)` — return new array with cb applied.
- `filter(cb)` — return new array with items where cb is truthy.
- `reduce(cb, init)` — accumulate values to a single result.
- `find(cb)` / `findIndex(cb)` — return first matching value/index or `undefined` / `-1`.
- `some(cb)` / `every(cb)` — boolean checks across items.
- `indexOf(value)` / `includes(value)` — search by value.
- `slice(start, end)` — non-mutating sub-array.
- `splice(start, deleteCount, ...items)` — mutating insert/remove.
- `concat(...arrays)` — combine arrays (non-mutating).
- `join(sep)` — join elements into a string.

## Iteration patterns

```js
// classic for
for (let i = 0; i < arr.length; i++) console.log(i, arr[i]);

// for..of (values)
for (const val of arr) console.log(val);

// for..in iterates keys (not recommended for arrays)
for (const k in arr) console.log(k); // iterates indices and inherited keys

// functional
arr.forEach((v, i) => console.log(i, v));

// mapping
const names = people.map(p => p.name);
```

## Copying arrays & immutability

Shallow copy techniques (copy elements, not deeply nested objects):

```js
const copy1 = arr.slice();
const copy2 = [...arr];
const copy3 = Array.from(arr);

// For deep copies of nested structures:
const deep = JSON.parse(JSON.stringify(nested));
// or use a library like lodash's cloneDeep for complex cases
```

Remember: copying an array of objects still leaves object references intact (shallow copy).

## Array-like objects and conversion

DOM NodeLists or `arguments` are array-like: have numeric indices and `length` but lack array methods.

```js
const nodeList = document.querySelectorAll('div');
const arrFromNodes = Array.from(nodeList);
```

## Nested arrays (matrices)

```js
const matrix = [[1,2],[3,4]];
matrix[0][1]; // 2

// flattening
matrix.flat(); // [1,2,3,4]
matrix.flat(2); // deeper
```

## Typed Arrays

For binary data and performance-sensitive numeric arrays, use typed arrays: `Int8Array`, `Uint8Array`, `Float32Array`, etc.

```js
const buf = new ArrayBuffer(16);
const view = new Uint8Array(buf);
```

## Common pitfalls

- Sparse arrays: `new Array(3)` creates empty slots — many array methods skip holes.
- Mutating methods affect all references to the same array variable.
- `sort()` sorts lexicographically by default — pass a comparer for numbers: `arr.sort((a,b)=>a-b)`.
- Beware `==` vs `===` when checking values.

## Performance tips

- Avoid repeatedly growing very large arrays in tight loops; consider pre-sizing if possible.
- Use native methods (`map`, `forEach`) which are optimized in engines; prefer `for` loops in very hot code when measurements show benefit.

## Quick examples

```js
// find unique values
const unique = [...new Set([1,2,2,3])]; // [1,2,3]

// group by
const byType = items.reduce((acc, it) => {
  (acc[it.type] ||= []).push(it);
  return acc;
}, {});
```

---

If you'd like, I can also add short exercises, diagrams, or interactive JS snippets to this file.

