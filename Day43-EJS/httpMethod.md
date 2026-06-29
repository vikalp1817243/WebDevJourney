# HTTP Request Methods for Beginners

HTTP methods are ways for a client (like a browser or app) to tell the server what it wants to do.

Think of them like actions you ask the server to perform.

---

## 1. GET

### What it does
GET is used to read or fetch data from the server.

### Example
```js
app.get('/users', (req, res) => {
  res.send('Get all users');
});
```

### Beginner explanation
Use GET when you want to view information.

Example ideas:
- view a homepage
- load a list of products
- fetch user details

---

## 2. POST

### What it does
POST is used to send new data to the server.

### Example
```js
app.post('/users', (req, res) => {
  res.send('Create a new user');
});
```

### Beginner explanation
Use POST when you want to create something new.

Example ideas:
- create a user account
- submit a form
- add a new item

---

## 3. PUT

### What it does
PUT is used to update an existing resource completely.

### Example
```js
app.put('/users/:id', (req, res) => {
  res.send('Update a user completely');
});
```

### Beginner explanation
Use PUT when you want to replace the whole data of something.

Example ideas:
- replace all details of a user profile
- update a full product record

> PUT usually replaces the old data with new data.

---

## 4. PATCH

### What it does
PATCH is used to update part of an existing resource.

### Example
```js
app.patch('/users/:id', (req, res) => {
  res.send('Update only part of a user');
});
```

### Beginner explanation
Use PATCH when you only want to change a small part.

Example ideas:
- change only the email
- update only the username
- change one field in a profile

> PATCH is more specific than PUT.

---

## 5. DELETE

### What it does
DELETE is used to remove data from the server.

### Example
```js
app.delete('/users/:id', (req, res) => {
  res.send('Delete a user');
});
```

### Beginner explanation
Use DELETE when you want to remove something.

Example ideas:
- delete a user
- remove a product
- erase a post

---

## 6. Quick Summary

| Method | Purpose | Common Use |
|---|---|---|
| GET | Read data | View information |
| POST | Create data | Add new data |
| PUT | Replace/update all data | Full update |
| PATCH | Update part of data | Small change |
| DELETE | Remove data | Delete something |

---

## 7. Easy Way to Remember

- GET = get information
- POST = send new information
- PUT = replace completely
- PATCH = change a little
- DELETE = remove

---

## 8. Beginner Tip

A simple way to remember them is:

- Read = GET
- Create = POST
- Update fully = PUT
- Update partially = PATCH
- Remove = DELETE

---

## 9. Example in Real Life

Imagine a social media app:

- GET /posts → see all posts
- POST /posts → create a new post
- PUT /posts/1 → replace the whole post
- PATCH /posts/1 → change only the title
- DELETE /posts/1 → delete the post

---

## 10. HTTP Response Status Codes

When the server responds, it also sends a status code. This tells the client if the request worked or if there was an error.

### Common status codes

- 200 OK → the request was successful
- 201 Created → something new was created successfully
- 204 No Content → success, but there is no response body
- 400 Bad Request → the request is invalid
- 401 Unauthorized → the user is not logged in or not allowed
- 403 Forbidden → the user is not allowed to access this resource
- 404 Not Found → the resource does not exist
- 500 Internal Server Error → something went wrong on the server

### Status code ranges

- 1xx → Informational: the request is being processed
- 2xx → Successful: the request worked
- 3xx → Redirection: the client needs to go somewhere else
- 4xx → Client error: the client sent a bad or unauthorized request
- 5xx → Server error: the server failed to process the request

### Example in Express
```js
app.get('/home', (req, res) => {
  res.status(200).send('Success');
});
```

### Beginner tip
A simple rule:
- 2xx = success
- 4xx = client error
- 5xx = server error
