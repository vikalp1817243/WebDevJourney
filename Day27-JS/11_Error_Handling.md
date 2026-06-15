# 11. Error Handling

```js
try {
  JSON.parse('invalid');
} catch (err) {
  console.log('parse failed', err.message);
} finally {
  // cleanup
}
```
