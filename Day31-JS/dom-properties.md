# Useful DOM Properties for Beginners

This is a quick reference of DOM properties that are commonly useful when learning JavaScript and web development.

## Selecting and Understanding Elements

### `document`

Represents the whole HTML document.

```js
document.querySelector("h1");
```

### `document.body`

Refers to the `<body>` element of the page.

```js
document.body.style.backgroundColor = "lightblue";
```

### `document.head`

Refers to the `<head>` element of the page.

```js
console.log(document.head);
```

### `element.children`

Returns only the child elements inside an element.

```js
const list = document.querySelector("ul");
console.log(list.children);
```

### `element.parentElement`

Returns the parent element of an element.

```js
const item = document.querySelector("li");
console.log(item.parentElement);
```

## Changing Content

### `element.textContent`

Gets or changes the plain text inside an element.

```js
document.querySelector("h1").textContent = "Hello";
```

### `element.innerHTML`

Gets or changes the HTML inside an element.

```js
document.querySelector("h1").innerHTML = "<em>Hello</em>";
```

### `element.innerText`

Gets or changes the visible text inside an element.

```js
document.querySelector("p").innerText = "New paragraph";
```

## Changing Styles

### `element.style`

Used to change inline CSS styles.

```js
document.querySelector("h1").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
```

### `element.classList`

Used to add, remove, toggle, or check CSS classes.

```js
const heading = document.querySelector("h1");

heading.classList.add("large");
heading.classList.remove("large");
heading.classList.toggle("large");
heading.classList.contains("large");
```

### `element.className`

Gets or changes all classes of an element as one string.

```js
document.querySelector("h1").className = "title large";
```

## Working with Attributes

### `element.attributes`

Returns all attributes of an element.

```js
const link = document.querySelector("a");
console.log(link.attributes);
```

### `element.id`

Gets or changes the `id` of an element.

```js
document.querySelector("h1").id = "main-heading";
```

### `element.href`

Gets or changes the link address of an `<a>` element.

```js
document.querySelector("a").href = "https://www.google.com";
```

### `element.src`

Gets or changes the source of an image, script, or similar element.

```js
document.querySelector("img").src = "image.png";
```

### `element.alt`

Gets or changes the alternate text of an image.

```js
document.querySelector("img").alt = "A beautiful landscape";
```

### `element.value`

Gets or changes the value of form elements such as input fields.

```js
document.querySelector("input").value = "Hello";
```

### `element.checked`

Gets or changes whether a checkbox or radio button is selected.

```js
document.querySelector("input").checked = true;
```

### `element.disabled`

Gets or changes whether a form element is disabled.

```js
document.querySelector("button").disabled = true;
```

## Element Information

### `element.tagName`

Returns the tag name of an element.

```js
console.log(document.querySelector("h1").tagName);
```

### `element.nodeName`

Returns the name of a node.

```js
console.log(document.querySelector("p").nodeName);
```

### `element.clientWidth`

Returns the visible width of an element, including padding.

```js
console.log(document.querySelector("div").clientWidth);
```

### `element.clientHeight`

Returns the visible height of an element, including padding.

```js
console.log(document.querySelector("div").clientHeight);
```

## Quick Beginner List

- `textContent`: change plain text
- `innerHTML`: change HTML content
- `style`: change inline CSS
- `classList`: manage CSS classes
- `attributes`: view all attributes
- `id`: get or change an element id
- `href`: change a link URL
- `src`: change an image source
- `value`: read or change input values
- `checked`: check or uncheck checkboxes
- `disabled`: enable or disable form elements
- `children`: get child elements
- `parentElement`: get the parent element
