# 4. Control Flow

If / else / else if, switch, loops (`for`, `while`, `for...of`, `for...in`).

```js
if (x > 10) {
  console.log('>10');
} else if (x === 10) {
  console.log('=10');
} else {
  console.log('<10');
}

// switch
switch (color) {
  case 'red':
    // ...
    break;
  default:
}

// loops
for (let i = 0; i < 5; i++) console.log(i);

const arr = [10, 20, 30];
for (const v of arr) console.log(v); // values
for (const i in arr) console.log(i); // indices
```
