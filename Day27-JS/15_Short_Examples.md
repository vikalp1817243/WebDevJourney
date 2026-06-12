# 15. Short Examples — Put Together

```js
// small app: sum of even numbers after doubling
const nums = [1,2,3,4,5];
const total = nums
  .map(n => n * 2)
  .filter(n => n % 2 === 0)
  .reduce((s, n) => s + n, 0);
console.log(total);

// async fetch example (node: need node >=18 or fetch polyfill)
async function getData() {
  try {
    const data = await fetch('https://api.example.com/data').then(r => r.json());
    console.log(data);
  } catch (err) {
    console.error('fetch failed', err);
  }
}
```
