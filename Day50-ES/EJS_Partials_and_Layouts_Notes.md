# EJS Partials, Layouts, and Static Files

These notes explain how to create a simple multi-page Express website with EJS, reusable page sections, and CSS/images.

## 1. What is EJS?

**EJS** stands for *Embedded JavaScript*. It is a template engine for Node.js and Express.

Instead of sending a plain HTML file, Express can render an EJS file and insert dynamic data into it. EJS files normally use the `.ejs` extension.

```ejs
<h1>Welcome, <%= name %>!</h1>
```

If the server sends `{ name: "Jay" }`, the browser receives:

```html
<h1>Welcome, Jay!</h1>
```

## 2. Static vs Dynamic Files

### Static files

Static files are sent to the browser as they are. Common examples are:

- CSS files
- Images
- Client-side JavaScript files
- Fonts

Keep these files inside a `public` folder.

### Dynamic files

Dynamic content is created or changed by the server. EJS templates are dynamic because Express renders them before sending the final HTML page.

## 3. Suggested Project Structure

```text
project-folder/
├── app.js
├── package.json
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── logo.png
│   └── js/
│       └── script.js
└── views/
    ├── index.ejs
    ├── about.ejs
    ├── contact.ejs
    └── partials/
        ├── header.ejs
        └── footer.ejs
```

## 4. Serve Static Files with Express

Tell Express to make the `public` folder available to the browser.

```js
import express from "express";

const app = express();

app.use(express.static("public"));
```

Now a file at `public/css/styles.css` is available at this URL:

```text
/css/styles.css
```

Use that URL in an EJS file:

```html
<link rel="stylesheet" href="/css/styles.css" />
```

For an image stored at `public/images/logo.png`:

```html
<img src="/images/logo.png" alt="Site logo" />
```

> Do not include `public` in the browser path. Write `/css/styles.css`, not `/public/css/styles.css`.

## 5. What Are Partials?

A **partial** is a small reusable EJS file. It prevents repeating the same HTML on every page.

Headers, navigation bars, and footers are good examples because they usually appear on multiple pages.

### `views/partials/header.ejs`

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><%= title %></title>
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
```

### `views/partials/footer.ejs`

```ejs
  </main>
  <footer>
    <p>&copy; 2026 My EJS Website</p>
  </footer>
</body>
</html>
```

## 6. Include Partials in a Page

Use the EJS `include` syntax to place a partial inside another template.

### `views/index.ejs`

```ejs
<%- include("partials/header", { title: "Home" }) %>

<h1>Home page</h1>
<p>This content belongs only to the home page.</p>

<%- include("partials/footer") %>
```

`<%- ... %>` outputs the partial as HTML. This is important: using `<%= ... %>` would escape the HTML instead.

## 7. Create Routes for Multiple Pages

Each route listens for a browser request and tells Express which EJS page to render.

```js
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
```

When a visitor opens `/about`, Express renders `views/about.ejs`.

## 8. A Complete Small Example

```js
import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## 9. Why Layouts Matter

A layout is the shared structure of a website: the document setup, header, navigation, main area, and footer. Partials help us build that layout from reusable pieces.

Benefits:

- Write common HTML once.
- Keep navigation consistent across pages.
- Update a header or footer in one place.
- Make templates shorter and easier to read.

## 10. Practice Exercise

Build a small three-page site.

1. Create `Home`, `About`, and `Contact` pages.
2. Add `header.ejs` and `footer.ejs` inside `views/partials`.
3. Include both partials on each page.
4. Add links to all pages in the navigation.
5. Create `public/css/styles.css` and style the navigation, page content, and footer.
6. Add an image from `public/images` to one page.

## 11. Common Mistakes

- Forgetting `app.use(express.static("public"))`, so CSS or images do not load.
- Writing `/public/css/styles.css` in HTML instead of `/css/styles.css`.
- Putting EJS templates outside the `views` folder.
- Forgetting to set `app.set("view engine", "ejs")`.
- Repeating header and footer HTML instead of using partials.

## Next Topic

The next project, a **Band Name Generator**, can use these same skills: Express routes, EJS templates, form data, and reusable page sections.
