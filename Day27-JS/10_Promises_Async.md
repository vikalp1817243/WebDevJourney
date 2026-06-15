# 10. Promises & Async/Await

Promise basics:

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1000);
});

p.then(v => console.log(v)).catch(err => console.error(err));

// async/await
(async () => {
  try {
    const v = await p;
    console.log(v);
  } catch (err) {
    console.error(err);
  }
})();
```
