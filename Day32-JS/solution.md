# Solutions Check

## 1. Page Setup Questions

### 1.1 Which HTML file contains the visible page structure?

Your answer: `body`

Status: Incorrect

Correct answer: `index.html`

The `body` is an HTML element inside the page, but the file that contains the visible page structure is `index.html`.

### 1.2 Which CSS file controls the visual design?

Your answer: `root`

Status: Incorrect

Correct answer: `styles.css`

The `:root` selector appears inside CSS, but the file controlling the visual design is `styles.css`.

### 1.3 Is there any JavaScript file connected right now?

Your answer: `no`

Status: Correct

Correct answer: No. There is no `<script>` tag connected in `index.html`.

### 1.4 Where would a JavaScript file usually be connected in this page?

Your answer: `at the end jsut before the body tag`

Status: Mostly correct

Correct answer: A JavaScript file is commonly connected just before the closing `</body>` tag, or inside the `head` using the `defer` attribute.

Example placement before the closing `</body>` tag:

```html
<script src="domApp.js"></script>
</body>
```

Example placement in the `head` using `defer`:

```html
<script src="domApp.js" defer></script>
```

### 1.5 Why should the JavaScript run after the HTML elements exist?

Your answer: `if js run before then js script cannot find the elemnts on page, thats why the first html render sthen js follows it.`

Status: Correct

Correct answer: JavaScript should run after the HTML elements exist because DOM selection methods cannot find elements that have not been loaded yet. If JavaScript runs too early, selectors may return `null`, and your code may cause errors.

### 1.6 What does the `defer` attribute do if you use it on a script tag?

Your answer: No answer given

Status: Incomplete

Correct answer: The `defer` attribute tells the browser to download the JavaScript file while the HTML is still being parsed, but wait to run the JavaScript until after the HTML document has been parsed.

Example:

```html
<script src="domApp.js" defer></script>
```


## 2. Document and Page Structure

### 2.1 What is the root element of the HTML page?

Your answer: `<html></html>`

Status: Correct

Correct answer: The root element is `<html>`.

### 2.2 Which elements are inside the `head`?

Your answer: `meta, title, link`

Status: Correct

Correct answer: The `head` contains two `meta` elements, one `title` element, and one `link` element.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DOM Practice Playground</title>
<link rel="stylesheet" href="styles.css">
```

### 2.3 Which elements are inside the `body`?

Your answer: `header, main`

Status: Correct

Correct answer: The direct child elements inside `body` are `header` and `main`.

### 2.4 What is the main wrapper element for the page content?

Your answer: `body`

Status: Incorrect

Correct answer: The main wrapper element for the page content is `<main>`.

The `body` contains everything visible on the page, but the main content area is wrapped inside the `main` element.

### 2.5 How many major sections are inside the `main` element?

Your answer: `only two major sections`

Status: Correct

Correct answer: There are two major `section` elements inside `main`: `#hero` and `.dashboard`.

### 2.6 Which section appears first?

Your answer: `section whihc has id hero`

Status: Correct

Correct answer: The first section is the section with `id="hero"`.

### 2.7 Which section appears last?

Your answer: `section whihc has class dashboard`

Status: Correct

Correct answer: The last major section inside `main` is the section with `class="dashboard"`.


## 3. Selecting the Hero Section

### 3.1 How would you select the hero section by id?

Your answer: `document.selectElementByID("hero")`

Status: Incorrect

Correct answer:

```js
document.getElementById("hero");
```

Suggestion: The method name is `getElementById`. JavaScript is case-sensitive, so `Id` must be written exactly like that.

### 3.2 How would you select the main title by id?

Your answer: `document.selectElementById("main-title")`

Status: Incorrect

Correct answer:

```js
document.getElementById("main-title");
```

Suggestion: You used the correct id, but the wrong method name.

### 3.3 How would you select the hero description by id?

Your answer: `document.selectElementById(hero-description)`

Status: Incorrect

Correct answer:

```js
document.getElementById("hero-description");
```

Suggestion: The id must be inside quotes. Without quotes, JavaScript thinks `hero-description` is code, not text.

### 3.4 How would you select the hero button by id?

Your answer: `document.querySelector("Button").getElementById("hero-section")`

Status: Incorrect

Correct answer:

```js
document.getElementById("hero-action");
```

Another correct option:

```js
document.querySelector("#hero-action");
```

Suggestion: `getElementById` is used directly on `document`. Also, the button id is `hero-action`, not `hero-section`.

### 3.5 What text is inside the main title?

Your answer: `text inside the main title is Learn the DOM by touching real elements`

Status: Correct

Correct answer: `Learn the DOM by touching real elements`

Suggestion: Good. For cleaner formatting, write only the exact text value.

### 3.6 What text is inside the hero button?

Your answer: `Start exploring`

Status: Correct

Correct answer: `Start exploring`

### 3.7 How could JavaScript change the main title text?

Your answer: `document.selectElementById("main-title")=Garbage;`

Status: Incorrect

Correct answer:

```js
document.getElementById("main-title").textContent = "Garbage";
```

Suggestion: First select the element, then change its `textContent`. The new text must be inside quotes.

### 3.8 How could JavaScript change the hero description text?

Your answer: `document.selectElementById(hero-description).innerHtml()=hero description changed`

Status: Incorrect

Correct answer:

```js
document.getElementById("hero-description").textContent = "Hero description changed";
```

Another possible option:

```js
document.getElementById("hero-description").innerHTML = "Hero description changed";
```

Suggestion: Prefer `textContent` when you only want to change plain text. Also, the property is `innerHTML`, not `innerHtml()`.

### 3.9 What event would you listen for if the user clicks the hero button?

Your answer: `document.onclick().getElementbyid("btn primary")`

Status: Incorrect

Correct answer: You would listen for the `click` event.

Example:

```js
document.getElementById("hero-action").addEventListener("click", function () {
  // Code runs when the hero button is clicked.
});
```

Suggestion: Select the button first, then use `addEventListener("click", ...)`. The button has the id `hero-action`; `btn` and `primary-btn` are classes.

## Section 3 Improvement Notes

- Use `document.getElementById("id-name")` for selecting by id.
- Put id names inside quotes.
- Use `textContent` to change plain text.
- Use `innerHTML` only when you intentionally want to insert HTML.
- Use `addEventListener("click", function () {})` for click events.
- Remember that JavaScript is case-sensitive: `getElementById`, `innerHTML`, and `textContent` must be spelled exactly.
