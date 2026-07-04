# Embedded JavaScript (JS) for Beginners

## What is Embedded JavaScript?

Embedded JavaScript means writing JavaScript code directly inside an HTML file or a web page. It is used to make a webpage interactive.

Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Embedded JS Example</title>
</head>
<body>
  <button onclick="alert('Hello!')">Click Me</button>
</body>
</html>
```

In this example, the JavaScript is embedded inside the HTML using the `onclick` attribute.

## What is its use?

Embedded JavaScript is used to:

- make buttons work
- show alerts or messages
- change text on a page
- validate forms
- create simple interactivity

It helps a webpage respond to user actions like clicking, typing, or hovering.

## Simple example

```html
<!DOCTYPE html>
<html>
<body>
  <h2>My First Embedded JS</h2>
  <p id="demo">Hello</p>
  <button onclick="document.getElementById('demo').innerHTML = 'Welcome!'">Change Text</button>
</body>
</html>
```

When the button is clicked, the text changes from “Hello” to “Welcome!”.

## What is jQuery?

jQuery is a JavaScript library. It makes writing JavaScript easier and shorter.

Example:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
  $(document).ready(function(){
    $('#demo').text('Hello from jQuery');
  });
</script>
```

## Difference between Embedded JavaScript and jQuery

### 1. Embedded JavaScript
- It is plain JavaScript written directly in the page.
- It is the basic language of the web.
- It is good for learning and simple tasks.

### 2. jQuery
- It is a helper library built with JavaScript.
- It helps write less code for common tasks.
- It is useful for DOM manipulation, animations, and AJAX.

## In simple words

- JavaScript is the core language.
- jQuery is a tool that makes JavaScript easier to use.

## Easy comparison

- JavaScript: the main language
- jQuery: a library built on JavaScript

## Beginner summary

Embedded JavaScript is used to add action and behavior to a webpage. jQuery is not a different language; it is a library that helps developers write JavaScript faster and with less code.

## Final takeaway

If you are just starting, learn plain JavaScript first. Later, you can learn jQuery or modern tools like React and Vue.
