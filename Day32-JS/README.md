# DOM Practice Question Guide

This project gives you a ready-made HTML page for beginner DOM practice.

Files:

- `index.html` contains the page elements.
- `styles.css` contains styling only.
- No JavaScript file is included yet.

Your task is to create your own JavaScript later and answer the questions in order by selecting and working with the HTML elements.

## How to Use This Guide

1. Open `index.html` in the browser.
2. Inspect the page and the HTML structure.
3. Create your own JavaScript file only when you are ready.
4. Connect your JavaScript file to `index.html`.
5. Work through the questions below in sequence.
6. Do not rush to advanced topics before you can answer the earlier sections.

## 1. Page Setup Questions

- Which HTML file contains the visible page structure?
- Which CSS file controls the visual design?
- Is there any JavaScript file connected right now?
- Where would a JavaScript file usually be connected in this page?
- Why should the JavaScript run after the HTML elements exist?
- What does the `defer` attribute do if you use it on a script tag?

## 2. Document and Page Structure

Apply these questions to the whole `index.html` document.

- What is the root element of the HTML page?
- Which elements are inside the `head`?
- Which elements are inside the `body`?
- What is the main wrapper element for the page content?
- How many major sections are inside the `main` element?
- Which section appears first?
- Which section appears last?

## 3. Selecting the Hero Section

Apply these questions to `#hero`, `#main-title`, `#hero-description`, and `#hero-action`.

- How would you select the hero section by id?
- How would you select the main title by id?
- How would you select the hero description by id?
- How would you select the hero button by id?
- What text is inside the main title?
- What text is inside the hero button?
- How could JavaScript change the main title text?
- How could JavaScript change the hero description text?
- What event would you listen for if the user clicks the hero button?

## 4. Selecting Navigation Links

Apply these questions to `.nav-link`.

- How many navigation links are on the page?
- How would you select only the first navigation link?
- How would you select all navigation links?
- What kind of collection do you get when selecting all matching links?
- How could you loop through every navigation link?
- How could you add the same click event listener to every navigation link?
- What attribute does each navigation link use to point to a page section?
- How could JavaScript read the `href` attribute of each link?

## 5. Reading Text Content

Apply these questions to headings, paragraphs, buttons, and list items.

- How would you read the text inside `#main-title`?
- How would you read the text inside `.status-message`?
- How would you read the text inside each `.task-item`?
- What is the difference between reading text from one element and many elements?
- Which property would you use to read text without HTML tags?
- Which property would include HTML markup if the element contained it?
- Why should you be careful when placing user input into HTML?

## 6. Changing Text Content

Apply these questions to `#main-title`, `#counter-value`, `#preview-name`, and `.status-message`.

- How could JavaScript change the page title after a button click?
- How could JavaScript update the counter number?
- How could JavaScript replace the preview name with text typed by the user?
- How could JavaScript show a success message inside `.status-message`?
- What should happen if the user submits an empty input?
- Which elements on the page are good targets for changing text?
- Which elements should probably keep their original text?

## 7. Working With Inputs

Apply these questions to `#name-input`, `#email-input`, `#topic-select`, `#agree-checkbox`, and `#message-input`.

- How would you select each form control by id?
- How would you read the current value of the name input?
- How would you read the current value of the email input?
- How would you find which option is selected in the dropdown?
- How would you check whether the checkbox is checked?
- How would you read the text written in the message box?
- Why do input values usually come back as strings?
- What event would you use to respond while the user is typing?
- What event would you use when the user submits the form?

## 8. Working With Buttons

Apply these questions to `.btn`, `#hero-action`, `#increase-btn`, `#decrease-btn`, `#reset-btn`, `#theme-toggle`, and `#clear-form`.

- How many buttons are on the page?
- How would you select all buttons with the `.btn` class?
- How would you select only the increase button?
- How would you select only the decrease button?
- How would you select only the reset button?
- What should happen when the increase button is clicked?
- What should happen when the decrease button is clicked?
- What should happen when the reset button is clicked?
- What should happen when the theme toggle button is clicked?
- What should happen when the clear form button is clicked?

## 9. Changing Classes

Apply these questions to `body`, `.panel`, `.task-item`, and `.badge`.

- How could JavaScript add a class to the `body` element?
- How could JavaScript remove a class from the `body` element?
- How could JavaScript toggle a dark mode class?
- How could JavaScript check if an element already has a class?
- How could clicking a task item mark it as complete?
- Why is toggling a class often better than changing many styles one by one?
- Which classes in the HTML are used for styling?
- Which new class names might you create for interactive states?

## 10. Working With Attributes

Apply these questions to `#profile-image`, `.nav-link`, `#email-input`, and `#message-input`.

- How would you read the `src` attribute of the image?
- How would you change the image source?
- How would you read the `alt` text of the image?
- Why is image `alt` text important?
- How would you read the `href` attribute of a navigation link?
- How would you change the placeholder text of an input?
- How would you disable a form control?
- How would you enable it again?

## 11. Styling With JavaScript

Apply these questions to `#hero`, `.panel`, `#counter-value`, and `.status-message`.

- How could JavaScript change the background color of the hero section?
- How could JavaScript change the text color of the counter value?
- How could JavaScript hide the status message?
- How could JavaScript show the status message again?
- How would `background-color` be written as a JavaScript style property?
- When should you use the `style` property?
- When should you use `classList` instead?

## 12. Creating Elements

Apply these questions to `#task-list` and `#activity-log`.

- How could JavaScript create a new list item?
- How could JavaScript add text to a new list item?
- How could JavaScript add a class to a new list item?
- How could JavaScript append a new task to `#task-list`?
- How could JavaScript add a new activity message to `#activity-log`?
- Should new activity messages appear at the top or bottom?
- How could you create a list item from the value of an input?

## 13. Removing Elements

Apply these questions to `.task-item` and `.log-item`.

- How could JavaScript remove a single task item?
- How could JavaScript remove all activity log items?
- What should happen if there are no items left to remove?
- Should a click on a task remove it or mark it complete?
- How could you give the user a separate delete button for each task?
- What event would the delete button need?

## 14. DOM Tree Navigation

Apply these questions to `#task-list`, `.task-item`, `.panel`, and `.form-row`.

- What is the parent element of each task item?
- What are the children of `#task-list`?
- How would you move from a task item to its parent list?
- How would you find the first task item?
- How would you find the last task item?
- What is the difference between `children` and `childNodes`?
- Why might whitespace in the HTML matter when using nodes?

## 15. Event Questions

Apply these questions to buttons, inputs, the form, and task items.

- Which elements should listen for `click` events?
- Which elements should listen for `input` events?
- Which element should listen for a `submit` event?
- What is the event object?
- What does `event.target` tell you?
- Why might `event.preventDefault()` be needed for the form?
- How can you confirm that an event listener is working?
- How can you avoid calling a function before the event happens?

## 16. Form Practice Sequence

Apply these questions to `#contact-form`.

- How would you select the form?
- What should happen when the form is submitted?
- How can you stop the default form refresh?
- How can you read all form values?
- How can you check if the name input is empty?
- How can you check if the email input is empty?
- How can you check whether the agreement checkbox is selected?
- Where should a validation message appear?
- Where should a successful form submission appear?
- How could you reset the form after successful submission?

## 17. Counter Practice Sequence

Apply these questions to `#counter-card`.

- Which element displays the counter number?
- Which button should increase the number?
- Which button should decrease the number?
- Which button should reset the number?
- Where should the current counter value be stored in JavaScript?
- How can the displayed number stay in sync with the stored number?
- Should the counter be allowed to go below zero?
- What message should appear when the counter changes?

## 18. List Practice Sequence

Apply these questions to `#task-section`, `#task-input`, `#add-task`, and `#task-list`.

- How would you read a new task from the input?
- What should happen when the add task button is clicked?
- What should happen if the task input is empty?
- How should a new task item be created?
- Where should the new task item be placed?
- How could a clicked task item become completed?
- How could a completed task item become active again?
- How could you clear the input after adding a task?

## 19. Theme Practice Sequence

Apply these questions to `#theme-toggle` and the `body` element.

- Which element should receive a dark mode class?
- Which button should toggle the theme?
- How could JavaScript know whether dark mode is currently active?
- Should the button text change after the theme changes?
- Which CSS class would you create for dark mode?
- Which parts of the page should look different in dark mode?

## 20. Final Beginner Checklist

Before writing advanced DOM code, check if you can do these using this page:

- Select one element by id.
- Select many elements by class.
- Read text from an element.
- Change text inside an element.
- Read input values.
- Respond to button clicks.
- Respond to form submission.
- Stop a form from refreshing the page.
- Add and remove CSS classes.
- Read and change attributes.
- Create new elements.
- Add new elements to the page.
- Remove elements from the page.
- Loop through multiple elements.
- Use the browser console for testing.

Move slowly and experiment. The goal is to understand how each HTML element can become interactive through the DOM.
