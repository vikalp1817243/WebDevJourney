# Object-Oriented Programming in JavaScript for Web Development

## What OOP Means

Object-Oriented Programming, or OOP, is a way of organizing code around objects.

An object is a group of related data and behavior.

In web development, OOP helps you organize things like:

- user accounts
- products
- shopping carts
- forms
- UI components
- API data models
- game characters
- dashboard widgets

Instead of writing many separate variables and functions, you group related things together.

```js
const user = {
  name: "Jay",
  email: "jay@example.com",
  login() {
    console.log(`${this.name} logged in`);
  }
};

user.login();
```

Here, `name` and `email` are data. `login()` is behavior.

## Why OOP Is Useful in Web Development

OOP is useful when your code has repeated structures or real-world entities.

For example, an ecommerce site may have many products:

```js
const product1 = {
  name: "Keyboard",
  price: 1200,
  showPrice() {
    console.log(`${this.name}: Rs. ${this.price}`);
  }
};

const product2 = {
  name: "Mouse",
  price: 500,
  showPrice() {
    console.log(`${this.name}: Rs. ${this.price}`);
  }
};
```

This works, but it repeats code. OOP gives us better ways to create many similar objects.

## Classes in JavaScript

A class is a blueprint for creating objects.

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showPrice() {
    console.log(`${this.name}: Rs. ${this.price}`);
  }
}

const keyboard = new Product("Keyboard", 1200);
const mouse = new Product("Mouse", 500);

keyboard.showPrice();
mouse.showPrice();
```

Use a class when you need to create many objects with the same structure and behavior.

## Constructor

The `constructor` method runs automatically when a new object is created.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new User("Asha", "asha@example.com");
```

Use the constructor to set the starting values of an object.

## The `this` Keyword

`this` refers to the current object.

```js
class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`${this.label} button clicked`);
  }
}

const saveButton = new Button("Save");
saveButton.click();
```

Careful note: `this` can behave differently inside normal functions, arrow functions, event listeners, and callbacks.

Example:

```js
class Menu {
  constructor(button) {
    this.button = button;
  }

  attachClick() {
    this.button.addEventListener("click", () => {
      console.log(this.button);
    });
  }
}
```

Here, the arrow function keeps the class `this`, which is usually helpful in event listeners.

## Encapsulation

Encapsulation means keeping data and behavior together, while hiding details that other code should not directly change.

```js
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new Cart();
cart.addItem({ name: "Headphones", price: 1500 });
cart.addItem({ name: "Cable", price: 200 });

console.log(cart.getTotal());
```

The cart controls how items are added and how the total is calculated.

## Private Fields

JavaScript supports private class fields using `#`.

```js
class BankAccount {
  #balance;

  constructor(startingBalance) {
    this.#balance = startingBalance;
  }

  deposit(amount) {
    if (amount <= 0) return;
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);

console.log(account.getBalance());
```

Careful note: private fields cannot be accessed directly from outside the class.

```js
// This will cause an error:
// console.log(account.#balance);
```

Use private fields when outside code should not directly edit important internal values.

## Inheritance

Inheritance allows one class to reuse and extend another class.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`);
  }
}

const admin = new Admin("Meera", "meera@example.com");
const normalUser = new User("Rahul", "rahul@example.com");

admin.login();
admin.deleteUser(normalUser);
```

Use inheritance when one thing is truly a special type of another thing.

Good example:

- `Admin` is a type of `User`
- `PremiumUser` is a type of `User`
- `VideoPlayer` is a type of `MediaPlayer`

Avoid inheritance when the relationship is weak.

Bad example:

- `Cart` extends `Product`
- `Button` extends `User`

These are not natural relationships.

## The `super` Keyword

Use `super()` to call the parent class constructor.

```js
class Component {
  constructor(element) {
    this.element = element;
  }
}

class Modal extends Component {
  constructor(element, title) {
    super(element);
    this.title = title;
  }
}
```

Careful note: in a child class, you must call `super()` before using `this`.

## Polymorphism

Polymorphism means different objects can use the same method name but behave differently.

```js
class Notification {
  send(message) {
    console.log(message);
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SmsNotification extends Notification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

const notifications = [
  new EmailNotification(),
  new SmsNotification()
];

notifications.forEach((notification) => {
  notification.send("Your order is confirmed");
});
```

This is useful when different parts of your app follow the same pattern but need different behavior.

## Composition

Composition means building objects by combining smaller pieces.

In JavaScript web development, composition is often better than deep inheritance.

```js
class ApiClient {
  async get(url) {
    const response = await fetch(url);
    return response.json();
  }
}

class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getUsers() {
    return this.apiClient.get("/api/users");
  }
}

const apiClient = new ApiClient();
const userService = new UserService(apiClient);
```

Here, `UserService` uses `ApiClient`. It does not need to inherit from it.

Suggestion: prefer composition when one object uses another object.

## Practical Web Development Use Cases

## Use Case 1: Form Validator

```js
class FormValidator {
  constructor(formElement) {
    this.formElement = formElement;
  }

  isRequired(input) {
    return input.value.trim() !== "";
  }

  showError(input, message) {
    const error = input.nextElementSibling;
    if (error) {
      error.textContent = message;
    }
  }

  validate() {
    const inputs = this.formElement.querySelectorAll("[data-required]");
    let isValid = true;

    inputs.forEach((input) => {
      if (!this.isRequired(input)) {
        this.showError(input, "This field is required");
        isValid = false;
      }
    });

    return isValid;
  }
}

const form = document.querySelector("#signup-form");
const validator = new FormValidator(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validator.validate()) {
    console.log("Form submitted");
  }
});
```

Why this is useful:

- validation logic stays in one place
- the form code becomes easier to manage
- the same class can be reused for multiple forms

## Use Case 2: UI Component

```js
class Toast {
  constructor(message, type = "info") {
    this.message = message;
    this.type = type;
  }

  show() {
    const toast = document.createElement("div");
    toast.className = `toast toast-${this.type}`;
    toast.textContent = this.message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}

const toast = new Toast("Profile saved successfully", "success");
toast.show();
```

Why this is useful:

- reusable UI behavior
- cleaner DOM code
- easier to maintain repeated UI patterns

## Use Case 3: Shopping Cart

```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  remove(productId) {
    this.items = this.items.filter((product) => product.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  render(container) {
    container.innerHTML = "";

    this.items.forEach((product) => {
      const item = document.createElement("li");
      item.textContent = `${product.name} - Rs. ${product.price}`;
      container.appendChild(item);
    });
  }
}

const cart = new ShoppingCart();
cart.add({ id: 1, name: "Laptop Stand", price: 900 });
cart.add({ id: 2, name: "USB Hub", price: 700 });

const cartList = document.querySelector("#cart-list");
cart.render(cartList);
```

Why this is useful:

- cart data and cart behavior stay together
- total calculation is reusable
- rendering logic is grouped with the cart object

## Use Case 4: API Service Class

```js
class PostService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getAllPosts() {
    const response = await fetch(`${this.baseUrl}/posts`);
    return response.json();
  }

  async getPostById(id) {
    const response = await fetch(`${this.baseUrl}/posts/${id}`);
    return response.json();
  }
}

const postService = new PostService("https://jsonplaceholder.typicode.com");

postService.getAllPosts().then((posts) => {
  console.log(posts);
});
```

Why this is useful:

- API logic is separated from UI logic
- URLs are easier to manage
- code is easier to test and reuse

## OOP With DOM Elements

Classes are helpful when you need to manage DOM state and behavior together.

```js
class Accordion {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector(".accordion-button");
    this.content = element.querySelector(".accordion-content");
  }

  init() {
    this.button.addEventListener("click", () => {
      this.toggle();
    });
  }

  toggle() {
    this.content.hidden = !this.content.hidden;
  }
}

document.querySelectorAll(".accordion").forEach((element) => {
  const accordion = new Accordion(element);
  accordion.init();
});
```

This pattern is common for vanilla JavaScript projects.

## Suggestions for Using OOP in JavaScript

- Use classes when you create many similar objects.
- Use objects directly when you only need one simple thing.
- Keep classes focused on one responsibility.
- Prefer composition over inheritance when possible.
- Avoid making very large classes that do everything.
- Keep DOM code, API code, and business logic separated when the project grows.
- Use meaningful names like `UserService`, `Cart`, `Modal`, `FormValidator`, and `ApiClient`.
- Do not use OOP just because it looks advanced. Use it when it makes the code easier.

## Careful Notes to Keep in Mind

- JavaScript classes are built on prototypes internally.
- A class is not hoisted like a normal function declaration.
- Always call classes with `new`.
- `this` depends on how a function is called.
- Arrow functions do not have their own `this`.
- In child classes, call `super()` before using `this`.
- Do not overuse inheritance. Deep inheritance chains become difficult to understand.
- Private fields with `#` are truly private and cannot be accessed outside the class.
- Avoid mixing too much DOM manipulation directly inside business logic.
- If a class only has one method and no state, a simple function may be better.
- For React, modern code often uses functions and hooks instead of class components, but OOP concepts still help you understand state, objects, and reusable logic.

## Common Mistakes

## Mistake 1: Forgetting `new`

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

// Wrong:
// const user = User("Jay");

// Correct:
const user = new User("Jay");
```

## Mistake 2: Losing `this`

```js
class Counter {
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();
const increase = counter.increase;

// This can fail because `this` is lost:
// increase();
```

One solution:

```js
const increase = counter.increase.bind(counter);
increase();
```

## Mistake 3: Creating Classes for Everything

```js
class AddNumbers {
  add(a, b) {
    return a + b;
  }
}
```

This is unnecessary. A function is better:

```js
function add(a, b) {
  return a + b;
}
```

Use classes when objects need state and behavior together.

## Mistake 4: Too Much Inheritance

```js
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
class ServiceDog extends Dog {}
```

Deep inheritance can become hard to maintain.

In web development, small focused classes and composition are usually easier.

## What You Should Definitely Remember

- OOP organizes code using objects.
- Objects contain data and behavior.
- A class is a blueprint for creating objects.
- `constructor` sets initial values.
- `this` means the current object, but it can change depending on how a function is called.
- Encapsulation keeps related data and methods together.
- Private fields use `#`.
- Inheritance uses `extends`.
- `super()` calls the parent class constructor.
- Polymorphism means the same method name can behave differently in different classes.
- Composition means one object uses another object.
- In real web development, composition is often more useful than inheritance.
- Use OOP to make code clearer, reusable, and easier to maintain.
- Do not force OOP everywhere. Simple functions are sometimes the best solution.

Final memory line:

If your code has many similar things with their own data and actions, use OOP. If your code only performs one simple task, use a function.
