# 8. Built-in Global Objects & Useful Methods

### String

```js
'hello'.toUpperCase();
'  trim me  '.trim();
'abc'.includes('b');
'hi'.repeat(3); // 'hihihi'
```

### Number / Math

```js
Number('42');
parseInt('42', 10);
Math.max(1, 5, 3);
Math.random();
```

### Date

```js
const d = new Date();
d.toISOString();
```

### Array helpers (examples above)

### JSON

```js
const str = JSON.stringify({a:1});
const obj = JSON.parse('{"a":1}');
```
