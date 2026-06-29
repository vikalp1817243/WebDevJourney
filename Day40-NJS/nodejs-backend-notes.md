# Node.js Backend Development Notes

## 1. What is Node.js?
- Node.js is a JavaScript runtime used to build server-side/backend applications.
- It is fast, lightweight, and good for APIs, real-time apps, and microservices.
- Use it with Express.js, MongoDB, and SQL databases.

## 2. How to use Node.js
- Check version:
  ```bash
  node -v
  npm -v
  ```
- Run a JavaScript file:
  ```bash
  node app.js
  ```
- Create a project:
  ```bash
  npm init -y
  ```

## 3. Built-in (Native) Modules
Node.js comes with built-in modules:
- `fs` -> read/write files
- `path` -> work with file paths
- `http` -> create a server
- `url` -> parse URLs
- `os` -> system info

Example:
```javascript
const fs = require('fs');
const path = require('path');

fs.writeFileSync('demo.txt', 'Hello Node');
console.log(path.join(__dirname, 'demo.txt'));
```

## 4. Installing Modules
- Install packages using npm:
  ```bash
  npm install express
  ```
- Save as dependency:
  ```bash
  npm install express --save
  ```
- Install development dependency:
  ```bash
  npm install nodemon --save-dev
  ```

## 5. Package.json
- Keeps project info and dependencies.
- Important scripts can be added:
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

## 6. Common Backend Concepts
- Create server with `http` or `express`
- Handle routes like `GET`, `POST`, `PUT`, `DELETE`
- Read request body and query params
- Connect to databases
- Return proper status codes and JSON responses

## 7. Precautions to Keep in Mind
- Never expose secrets in code; use environment variables.
- Always validate user input.
- Handle errors properly using `try/catch`.
- Use async/await for file and database operations.
- Avoid blocking the event loop with heavy synchronous code.
- Keep dependencies updated.
- Use security packages like `helmet` and `cors` when needed.
- Do not run untrusted code in production.

## 8. Good Practices
- Use `npm` packages carefully and check reliability.
- Separate logic into routes, controllers, and services.
- Use `.env` for configuration.
- Write clean code and comments only where necessary.

## 9. Small Example
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
