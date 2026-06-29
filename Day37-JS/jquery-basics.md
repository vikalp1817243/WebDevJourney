# jQuery Basics

## What is jQuery?

jQuery is a fast, small, and feature-rich JavaScript library. It makes HTML document traversal, event handling, animation, and Ajax much simpler with an easy-to-use API that works across many browsers.

## Basic jQuery Properties

- `$`: the jQuery function, used to select elements and create jQuery objects.
- `$(document).ready()`: runs code when the DOM is fully loaded.
- `$.ajax()`: performs asynchronous HTTP requests.
- `$.each()`: loops through arrays and objects.
- `$.fn`: the prototype for jQuery methods.

## Selecting Elements

jQuery uses CSS-style selectors to find elements:

```js
// Select all paragraphs
$('p')

// Select an element by id
$('#myId')

// Select elements by class
$('.myClass')

// Select specific elements inside another
$('div.container p')
```

## Manipulating Styles

Change CSS styles with the `.css()` method:

```js
// Set a single property
$('p').css('color', 'red')

// Set multiple properties
$('div').css({
  backgroundColor: 'blue',
  fontSize: '18px'
})

// Get a property value
const color = $('p').css('color')
```

## Manipulating Text

Use `.text()` and `.html()` to change content:

```js
// Set text content
$('h1').text('Hello, jQuery!')

// Get text content
const title = $('h1').text()

// Set HTML content
$('.box').html('<strong>Bold text</strong>')

// Get HTML content
const markup = $('.box').html()
```

## Manipulating Attributes

Use `.attr()`, `.prop()`, and `.removeAttr()`:

```js
// Set an attribute
$('img').attr('src', 'image.jpg')

// Get an attribute
const src = $('img').attr('src')

// Remove an attribute
$('input').removeAttr('disabled')

// Set a property
$('input').prop('checked', true)
```

## Adding Event Listeners

Use `.on()` to attach event handlers:

```js
// Click event
$('#button').on('click', function() {
  alert('Button clicked!')
})

// Mouse enter event
$('.item').on('mouseenter', function() {
  $(this).css('background-color', '#f0f0f0')
})

// Multiple events
$('input').on('focus blur', function(event) {
  console.log(event.type)
})
```

## Adding and Removing Elements

Use `.append()`, `.prepend()`, `.after()`, `.before()`, `.remove()`, and `.empty()`:

```js
// Add new content inside an element
$('.list').append('<li>New item</li>')

// Add content at the beginning
$('.list').prepend('<li>First item</li>')

// Insert after an element
$('.item:last').after('<div class="note">Note</div>')

// Insert before an element
$('.item:first').before('<div class="note">Start note</div>')

// Remove elements
$('.old-item').remove()

// Clear all children
$('.list').empty()
```

## Website Animation with jQuery

jQuery includes simple animation methods:

```js
// Hide and show
$('#box').hide()
$('#box').show()

// Toggle visibility
$('#box').toggle()

// Fade effects
$('#box').fadeOut(400)
$('#box').fadeIn(400)
$('#box').fadeToggle(400)

// Slide effects
$('#box').slideUp(300)
$('#box').slideDown(300)
$('#box').slideToggle(300)

// Custom animation
$('#box').animate({
  opacity: 0.5,
  left: '+=50px'
}, 600)
```

## Example Combined Usage

```js
$(document).ready(function() {
  $('#toggleBtn').on('click', function() {
    $('#panel').slideToggle(200)
    $(this).text(function(i, text) {
      return text === 'Show' ? 'Hide' : 'Show'
    })
  })
})
```

## Notes

- jQuery works in most browsers, but modern apps often use vanilla JavaScript or newer frameworks.
- The library is useful for quick DOM manipulation, events, and animations with minimal code.
