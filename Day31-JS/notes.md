# DOM Manipulation Notes

## 1. Changing Styles with JavaScript

JavaScript can change the CSS styles of HTML elements using the DOM.

Example:

```js
document.querySelector("h1").style.color = "red";
```

### Important Rules

- Use the `.style` property to change inline CSS styles.
- CSS property names are written in camelCase in JavaScript.

| CSS Property | JavaScript Property |
| --- | --- |
| `font-size` | `fontSize` |
| `background-color` | `backgroundColor` |
| `margin-top` | `marginTop` |

- CSS values must be written as strings.

Example:

```js
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("button").style.backgroundColor = "yellow";
```

## 2. Separation of Concerns

In web development, HTML, CSS, and JavaScript should have separate responsibilities.

| Technology | Responsibility |
| --- | --- |
| HTML | Structure and content |
| CSS | Styling and appearance |
| JavaScript | Behavior and interactivity |

Directly changing many styles in JavaScript can make code harder to manage. A better approach is to define styles in CSS and use JavaScript to add, remove, or toggle classes.

### Using `classList`

CSS:

```css
.huge {
  font-size: 5rem;
  color: red;
}
```

JavaScript:

```js
document.querySelector("h1").classList.add("huge");
```

Common `classList` methods:

```js
element.classList.add("className");
element.classList.remove("className");
element.classList.toggle("className");
element.classList.contains("className");
```

## 3. Manipulating Text

JavaScript can change the text or HTML content inside an element.

### `textContent`

Returns or changes only the text inside an element.

```js
document.querySelector("h1").textContent = "Hello";
```

### `innerHTML`

Returns or changes the HTML inside an element, including tags.

```js
document.querySelector("h1").innerHTML = "<em>Hello</em>";
```

### Difference Between `textContent` and `innerHTML`

| Property | Use |
| --- | --- |
| `textContent` | Changes only plain text |
| `innerHTML` | Can add or change HTML tags |

Use `textContent` when only text is needed. Use `innerHTML` only when HTML tags must be added or changed.

## 4. Manipulating Attributes

HTML attributes such as `href`, `src`, and `class` can be accessed and changed using JavaScript.

Example HTML:

```html
<a href="https://www.google.com">Google</a>
```

### Selecting an Element

```js
const link = document.querySelector("a");
```

### Viewing All Attributes

```js
link.attributes;
```

### Getting an Attribute

```js
link.getAttribute("href");
```

### Setting an Attribute

```js
link.setAttribute("href", "https://www.bing.com");
```

## Quick Summary

- Use `.style` for simple inline style changes.
- Use camelCase for CSS properties in JavaScript.
- Put CSS values inside quotes.
- Prefer `classList` for cleaner style changes.
- Use `textContent` for plain text.
- Use `innerHTML` for HTML content.
- Use `getAttribute()` and `setAttribute()` to read or change element attributes.
