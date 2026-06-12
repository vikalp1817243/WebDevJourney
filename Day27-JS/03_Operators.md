# 3. Operators

## Operator categories

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- Comparison: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`
- Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- Other operators: `typeof`, `instanceof`, `in`, `? :`, `??`, `?.`, `delete`

## JavaScript-specific behavior to keep in mind

### `+` is special

- In JS, `+` means addition for numbers and concatenation for strings.
- If either operand is a string, JS converts the other operand to a string.

```js
5 + 2; // 7
'5' + 3; // '53'
'hello' + true; // 'hellotrue'
```

- This is different from many strongly typed languages like Java or C#, where `+` on mixed types is not allowed without explicit conversion.

### Coercion with other arithmetic operators

- Operators like `-`, `*`, `/`, `%`, and `**` convert operands to numbers.

```js
'5' - 3; // 2
'10' * '2'; // 20
true + 1; // 2
```

- In Python, arithmetic operators usually require compatible numeric types and do not coerce strings automatically.

### `==` vs `===`

- `==` compares with type coercion.
- `===` compares without coercion (strict equality).

```js
0 == false; // true
0 === false; // false
null == undefined; // true
null === undefined; // false
```

- In many other languages, `==` is already strict equality for primitives. For example, in C/C++ `==` compares values, and in Java `==` on objects compares references.
- In JavaScript, prefer `===` and `!==` to avoid coercion surprises.

### Logical operators return values

- `&&` and `||` do more than produce booleans; they return one of the operand values.

```js
0 && 'foo'; // 0
'hello' && 'world'; // 'world'
null || 'default'; // 'default'
```

- This differs from languages like Java, where `&&` and `||` always return boolean values.
- JS also short-circuits: the second operand is evaluated only when needed.

### Nullish coalescing and optional chaining

- `??` returns the right side only when the left side is `null` or `undefined`.

```js
const value = null ?? 'fallback'; // 'fallback'
const value2 = 0 ?? 'fallback'; // 0
```

- `?.` safely accesses nested properties and functions.

```js
const user = null;
user?.name; // undefined
```

- These operators are newer in JS and do not exist in older versions of some other languages.

### `typeof`, `instanceof`, and `in`

- `typeof` returns a string describing the operand type.

```js
typeof 3; // 'number'
typeof null; // 'object' (historic JS quirk)
```

- `instanceof` checks prototype inheritance.

```js
[] instanceof Array; // true
```

- `in` checks property presence in objects.

```js
'name' in { name: 'Jay' }; // true
```

- Note that JS has unusual built-in type behavior compared to many languages: `typeof null === 'object'` is a known exception.

### Increment and decrement

- `++` and `--` are supported in prefix and postfix forms.

```js
let count = 1;
count++; // returns 1, count becomes 2
++count; // returns 3, count becomes 3
```

- In many modern languages, these behave similarly, but in JS they can also trigger coercion when used on non-number values.

### Bitwise operators

- Bitwise operators work on 32-bit integers and coerce values to numbers first.
- `>>>` is an unsigned right shift, which is different from signed right shift `>>`.

```js
5 & 1; // 1
5 | 2; // 7
-1 >>> 1; // 2147483647
```

- Some languages do not have `>>>`; JavaScript’s unsigned right shift is a JS-specific nuance.

## Operator examples

```js
5 + 2; // 7
2 ** 3; // 8
'5' + 3; // '53'
'5' - 3; // 2
true && false; // false
const x = 10;
const msg = x > 5 ? 'big' : 'small';
```

## Cross-language reminders

- JS uses dynamic typing and coercion. In Java, C#, or C++, type mismatches usually cause compile-time errors or require explicit conversion.
- Python also supports `+` on strings and numbers separately, but it does not coerce `'5' - 3` into `2`.
- Java and C++ treat `==` as value equality for primitives, while JS `==` may coerce and compare different types.
- `===` in JS is closest to equality operators in statically typed languages, but object equality still differs.
- Logical operators in JS can return non-boolean values and are frequently used for defaults and conditional expressions.

> Keep in mind: JavaScript operators are designed for flexible, dynamic code, so always think about type conversion, truthy/falsy values, and whether you need strict comparison.
