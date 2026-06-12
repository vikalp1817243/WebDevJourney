# 7. Objects

Basics: key-value maps, methods, `this` inside methods.

```js
const user = {
  name: 'Jay',
  age: 30,
  greet() { return `Hi, I'm ${this.name}`; }
};

// access
user.name; // 'Jay'
user['age']; // 30

// dynamic property
const key = 'score';
user[key] = 100;

// shallow copy
const clone = { ...user };
```

Object methods: `Object.keys`, `Object.values`, `Object.entries`.

```js
Object.keys(user); // ['name','age','greet','score']
Object.entries(user).forEach(([k, v]) => console.log(k, v));
```
