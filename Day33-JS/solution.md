## 4. Selecting Navigation Links

### 4.1 How many navigation links are on the page?

Your answer: `4`

Correct.

There are 4 links with the class `.nav-link`:

- Counter
- Tasks
- Form
- Activity

Suggestion: The brand link, `DOM Playground`, is also inside the nav, but it does not have the `.nav-link` class. Since the question applies to `.nav-link`, do not count the brand link.

### 4.2 How would you select only the first navigation link?

Your answer: `document.querySelector("nav-link");`

Incorrect.

Correct solution:

```js
const firstNavLink = document.querySelector(".nav-link");
```

Suggestion: Use `.` before a class name. Without the dot, JavaScript looks for an HTML tag named `<nav-link>`, which does not exist here.

### 4.3 How would you select all navigation links?

Your answer: `document.querySelector("nav-links");`

Incorrect.

Correct solution:

```js
const navLinks = document.querySelectorAll(".nav-link");
```

Suggestion: Use `.nav-link` because each link has that class. `.nav-links` is the wrapper `div`, not the individual links.

### 4.4 What kind of collection do you get when selecting all matching links?

Your answer: blank.

Correct solution:

```js
const navLinks = document.querySelectorAll(".nav-link");
```

`querySelectorAll()` returns a `NodeList`.

Suggestion: A `NodeList` is like a list of elements. You can loop through it with `forEach()`.

### 4.5 How could you loop through every navigation link?

Your answer: blank.

Correct solution:

```js
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  console.log(link.textContent);
});
```

Suggestion: Each time the loop runs, `link` represents one navigation link.

### 4.6 How could you add the same click event listener to every navigation link?

Your answer: `document.querySelector("nav-links").addEventListener => {}`

Incorrect.

Correct solution:

```js
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Navigation link clicked");
  });
});
```

Suggestion: You cannot add the listener to all links with `querySelector()` because it only selects one element. Select all links first, then loop through them.

### 4.7 What attribute does each navigation link use to point to a page section?

Your answer: `#counter-section, #task-section, #form-section, #activity-section`

Partly correct.

Correct solution:

Each navigation link uses the `href` attribute.

The actual `href` values are:

```html
href="#counter-section"
href="#task-section"
href="#form-section"
href="#activity-section"
```

Suggestion: Your answer listed the values correctly. The question asks for the attribute name, so the main answer should be `href`.

### 4.8 How could JavaScript read the `href` attribute of each link?

Your answer: blank.

Correct solution:

```js
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  console.log(link.getAttribute("href"));
});
```

Another valid solution:

```js
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  console.log(link.href);
});
```

Suggestion: `getAttribute("href")` gives the exact value written in the HTML, like `#counter-section`. `link.href` may give the full browser URL.


## 5. Reading Text Content

### 5.1 How would you read the text inside `#main-title`?

Your answer: `document.getElementById("main-title")`

Partly correct.

Correct solution:

```js
const mainTitle = document.getElementById("main-title");
console.log(mainTitle.textContent);
```

Another valid solution:

```js
const mainTitle = document.querySelector("#main-title");
console.log(mainTitle.textContent);
```

Suggestion: Your selector is correct, but the question asks how to read the text. After selecting the element, add `.textContent`.

### 5.2 How would you read the text inside `.status-message`?

Your answer: `document.querySelector(".status-message").innerHTML()`

Incorrect.

Correct solution:

```js
const statusMessage = document.querySelector(".status-message");
console.log(statusMessage.textContent);
```

Suggestion: `innerHTML` is a property, not a function, so it should not use `()`. But for this question, `textContent` is the better choice because you only want the text.

### 5.3 How would you read the text inside each `.task-item`?

Your answer: `document.querySelector(".task-item").innerHTML()`

Incorrect.

Correct solution:

```js
const taskItems = document.querySelectorAll(".task-item");

taskItems.forEach(function (task) {
  console.log(task.textContent);
});
```

Suggestion: There are multiple `.task-item` elements, so use `querySelectorAll()` and loop through them. `querySelector()` would only select the first task item.

### 5.4 What is the difference between reading text from one element and many elements?

Your answer: `to read the text from one element simple point directly to that element, but inorder to to read text from many elemnt u need to use loop if they are of same king`

Correct.

Clean version:

For one element, select that element and read its text directly. For many elements, select all matching elements and loop through them.

Example:

```js
const mainTitle = document.querySelector("#main-title");
console.log(mainTitle.textContent);

const taskItems = document.querySelectorAll(".task-item");

taskItems.forEach(function (task) {
  console.log(task.textContent);
});
```

Suggestion: Good understanding. Just remember the method names: `querySelector()` for one element and `querySelectorAll()` for many elements.

### 5.5 Which property would you use to read text without HTML tags?

Your answer: `document.querySelector(".status-message").innerText`

Partly correct.

Correct solution:

```js
element.textContent;
```

Example:

```js
const statusMessage = document.querySelector(".status-message");
console.log(statusMessage.textContent);
```

Suggestion: `innerText` can also read visible text, but the common beginner answer here is `textContent` because it reads text without HTML tags.

### 5.6 Which property would include HTML markup if the element contained it?

Your answer: blank.

Correct solution:

```js
element.innerHTML;
```

Example:

```js
const statusMessage = document.querySelector(".status-message");
console.log(statusMessage.innerHTML);
```

Suggestion: `innerHTML` includes HTML markup if there is any inside the element.

### 5.7 Why should you be careful when placing user input into HTML?

Your answer: `it may lead to xss if not carefull`

Correct.

Clean version:

User input may contain unsafe HTML or JavaScript. If you place it into the page with `innerHTML`, it can cause an XSS security problem.

Safer option:

```js
element.textContent = userInput;
```

Suggestion: For normal user-written text, prefer `textContent` instead of `innerHTML`.


## 6. Changing Text Content

### 6.1 How could JavaScript change the page title after a button click?

Your answer:

```js
document.getElementById("main-title").addEventListener("click", funtion) => {
    innerHTML="Name Changed"};
```

Incorrect.

Correct solution:

```js
const heroButton = document.getElementById("hero-action");
const mainTitle = document.getElementById("main-title");

heroButton.addEventListener("click", function () {
  mainTitle.textContent = "Name Changed";
});
```

Suggestion: The click listener should usually go on the button, not the title. Also, spell `function` correctly and assign the new text to the selected element.

### 6.2 How could JavaScript update the counter number?

Your answer:

```js
document.getElementById("counter-value").innerHTML = "Counter value changed";
```

Partly correct.

Correct solution:

```js
const counterValue = document.getElementById("counter-value");
counterValue.textContent = "1";
```

Better counter example:

```js
let count = 0;
const counterValue = document.getElementById("counter-value");

count = count + 1;
counterValue.textContent = count;
```

Suggestion: You selected the right element. Since this is a counter, update it with a number instead of the text `"Counter value changed"`.

### 6.3 How could JavaScript replace the preview name with text typed by the user?

Your answer:

```js
let name = document.getElementById("preview-name");
name.textContent = userInput;
```

Partly correct.

Correct solution:

```js
const nameInput = document.getElementById("name-input");
const previewName = document.getElementById("preview-name");

previewName.textContent = nameInput.value;
```

Suggestion: Your update line is correct, but `userInput` needs to come from the input element's `.value`.

### 6.4 How could JavaScript show a success message inside `.status-message`?

Your answer: blank.

Correct solution:

```js
const statusMessage = document.querySelector(".status-message");
statusMessage.textContent = "Success! Your changes were saved.";
```

Suggestion: `.status-message` is a class, so use `querySelector(".status-message")`.

### 6.5 What should happen if the user submits an empty input?

Your answer: blank.

Correct solution:

The page should show an error or validation message and should not update the preview with empty text.

Example:

```js
const nameInput = document.getElementById("name-input");
const previewName = document.getElementById("preview-name");
const statusMessage = document.querySelector(".status-message");

if (nameInput.value.trim() === "") {
  statusMessage.textContent = "Please enter a name.";
} else {
  previewName.textContent = nameInput.value;
  statusMessage.textContent = "Name updated successfully.";
}
```

Suggestion: `.trim()` removes extra spaces, so `"   "` is treated as empty.

### 6.6 Which elements on the page are good targets for changing text?

Your answer: `#counter-value, #status-message`

Partly correct.

Correct solution:

Good targets include:

- `#main-title`
- `#counter-value`
- `#preview-name`
- `.status-message`
- `#preview-topic`

Suggestion: `.status-message` is a class, not an id, so write it with a dot.

### 6.7 Which elements should probably keep their original text?

Your answer: `#main-title`

Partly correct.

Correct solution:

Elements that label the page or controls should usually keep their original text unless there is a clear reason to change them.

Examples:

- navigation links like `Counter`, `Tasks`, `Form`, `Activity`
- form labels like `Name`, `Email`, `Topic`, `Message`
- button text like `Increase`, `Decrease`, `Reset`, `Submit form`

Suggestion: `#main-title` can be changed for practice because the README specifically includes it in this section.
