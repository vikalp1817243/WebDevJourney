# DOM Element Selection Notes

## What Is the DOM?

The DOM (Document Object Model) represents an HTML page as a tree of objects. JavaScript can select these objects, read their content, and change their text, HTML, attributes, or styles.

## Common Selection Methods

### `document.querySelector()`

- Selects the first element that matches a CSS selector.
- Returns an `Element` if found, otherwise returns `null`.
- Works with tag, class, ID, attribute, and complex CSS selectors.

```js
const firstLink = document.querySelector("a");
const mainTitle = document.querySelector("#main-title");
const firstCardText = document.querySelector(".card p");
```

### `document.querySelectorAll()`

- Selects all elements that match a CSS selector.
- Returns a static `NodeList`, not a true array.
- Use indexing or loops to work with individual elements.

```js
const links = document.querySelectorAll("a");

links[0].style.color = "red";

links.forEach((link) => {
  link.style.textDecoration = "none";
});
```

### `document.getElementsByTagName()`

- Selects elements by tag name.
- Returns a live `HTMLCollection`, not a true array.
- Use an index to access a specific element.

```js
const paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = "Updated first paragraph";
```

### `document.getElementsByClassName()`

- Selects elements by class name.
- Returns a live `HTMLCollection`, even if only one element matches.
- Use indexing before changing a specific element.

```js
const items = document.getElementsByClassName("item");
items[0].style.color = "blue";
```

### `document.getElementById()`

- Selects one element by its unique `id`.
- Returns an `Element` if found, otherwise returns `null`.
- IDs should be unique within a page.

```js
const heading = document.getElementById("heading");
heading.textContent = "New heading text";
```

## Updating Content

Use `textContent` when changing plain text. Use `innerHTML` only when you intentionally need to insert HTML markup.

```js
const message = document.getElementById("message");

message.textContent = "Hello from JavaScript!";
message.innerHTML = "<strong>Hello from JavaScript!</strong>";
```

## Practice Exercise

Change the text color of a specific link:

```js
const secondLink = document.querySelectorAll("a")[1];
secondLink.style.color = "green";
```

Or select it more directly if it has a class or ID:

```js
const specialLink = document.querySelector(".special-link");
specialLink.style.color = "green";
```

## Quick Comparison

| Method | Selector Type | Returns | Notes |
| --- | --- | --- | --- |
| `querySelector()` | CSS selector | First matching `Element` or `null` | Flexible and commonly used |
| `querySelectorAll()` | CSS selector | Static `NodeList` | Can use `forEach()` |
| `getElementsByTagName()` | Tag name | Live `HTMLCollection` | Requires indexing |
| `getElementsByClassName()` | Class name | Live `HTMLCollection` | Requires indexing |
| `getElementById()` | ID | One `Element` or `null` | ID should be unique |

## Key Takeaways

- Use `querySelector()` for flexible single-element selection.
- Use `querySelectorAll()` when you need multiple matches with CSS selector power.
- Collections from `getElementsByTagName()` and `getElementsByClassName()` are array-like, but they are not arrays.
- Always index into collections when changing one specific element.
- Check that an element exists before manipulating it in real projects.

## MDN References

- [Document: querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [Document: querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [Document: getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
- [Document: getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [Document: getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
