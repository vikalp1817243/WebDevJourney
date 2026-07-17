# EJS Beginner Notes

## What is EJS?

**EJS** stands for **Embedded JavaScript**. It is a template engine commonly used with Node.js and Express. It lets you write normal HTML and insert JavaScript where you need dynamic content.

For example, instead of creating a separate HTML page for every user, one EJS file can display a different name for each user.

```ejs
<h1>Welcome, <%= userName %>!</h1>
```

If `userName` is `"Jay"`, the browser receives:

```html
<h1>Welcome, Jay!</h1>
```

## Basic Express setup

Install EJS:

```bash
npm install ejs
```

Tell Express to use EJS:

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
```

By convention, EJS templates are placed in a `views` folder. Render a template like this:

```js
app.get("/", (req, res) => {
  res.render("index", { userName: "Jay" });
});
```

This renders `views/index.ejs`. Values in the second argument are available inside the template.

## EJS tags

EJS tags start with `<%` and end with `%>`. The character after `<%` changes what the tag does.

| Tag | Purpose | Example |
| --- | --- | --- |
| `<% %>` | Run JavaScript; does not print anything | `<% const age = 18; %>` |
| `<%= %>` | Print an escaped value (safe default) | `<%= userName %>` |
| `<%- %>` | Print unescaped HTML | `<%- htmlContent %>` |
| `<%# %>` | Write a template comment; it is not sent to the browser | `<%# temporary note %>` |
| `<%%` | Print a literal `<%` | `<%%= notEjs %>` |
| `-%>` | Trim the following newline | `<% if (loggedIn) { -%>` |

### 1. Scriptlet: `<% %>`

Use this tag for logic such as `if` statements, loops, and variables. It runs JavaScript but does **not** display its result.

```ejs
<% if (isLoggedIn) { %>
  <p>The user is logged in.</p>
<% } %>
```

### 2. Escaped output: `<%= %>`

Use this tag to display text or values. EJS escapes HTML characters, which helps prevent unsafe user input from becoming HTML.

```ejs
<p>Hello, <%= userName %>!</p>
```

If `userName` contains `<script>`, it will be displayed as text rather than run as code. Prefer `<%= %>` for normal output.

### 3. Unescaped output: `<%- %>`

Use this only when the value is trusted HTML that you intentionally want the browser to render.

```ejs
<%- articleBody %>
```

Be careful: never use `<%- %>` directly with untrusted form input or user-generated content. It can create security problems such as XSS.

### 4. Comments: `<%# %>`

These notes are removed when EJS renders the page, so visitors cannot see them in the page source.

```ejs
<%# Show this section after the profile feature is ready %>
```

For a comment that stays in the resulting HTML, use a normal HTML comment:

```html
<!-- Visitors can see this in page source -->
```

## Conditions

Use JavaScript conditions to choose which HTML to render.

```ejs
<% if (cartItems.length === 0) { %>
  <p>Your cart is empty.</p>
<% } else { %>
  <p>You have <%= cartItems.length %> item(s).</p>
<% } %>
```

## Loops

EJS can loop through arrays and create repeated HTML.

```ejs
<ul>
  <% fruits.forEach((fruit) => { %>
    <li><%= fruit %></li>
  <% }) %>
</ul>
```

If `fruits` is `["Apple", "Mango", "Banana"]`, EJS creates three list items.

## Including reusable files

Headers, footers, and navigation are often reused across pages. Put them in separate EJS files and include them.

```ejs
<%- include("partials/header") %>

<main>
  <h1><%= title %></h1>
</main>

<%- include("partials/footer") %>
```

`<%-` is commonly used for `include` because the included file contains HTML that should be rendered.

## Helpful rules to remember

- Use `.ejs` for template files, such as `index.ejs`.
- Use `<% %>` for logic only.
- Use `<%= %>` for text and values in most cases.
- Use `<%- %>` only for HTML you trust.
- Send data from Express with `res.render("fileName", data)`.
- Keep page layout pieces in partials to avoid repeating code.

## Small complete example

**Server (`app.js`)**

```js
app.get("/products", (req, res) => {
  res.render("products", {
    title: "Our Products",
    products: ["Notebook", "Pen", "Backpack"]
  });
});
```

**Template (`views/products.ejs`)**

```ejs
<h1><%= title %></h1>

<ul>
  <% products.forEach((product) => { %>
    <li><%= product %></li>
  <% }) %>
</ul>
```

EJS turns this template and the data from Express into regular HTML, then Express sends that HTML to the browser.
