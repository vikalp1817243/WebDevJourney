# API Notes for Beginners

## What is an API?
An API (Application Programming Interface) is a way for two pieces of software to talk to each other.

In web development, it usually means:
- the browser or front end asks for data
- the server or back end sends data back

A simple example is a weather app. Your page asks an API for today’s weather, and the API returns the data.

## Why APIs matter
APIs let websites and apps:
- get data from a server
- send data to a server
- update information without reloading the whole page

## Parts of an API request

### 1. API endpoint
An endpoint is the specific URL path you send a request to.

Example:
- `https://www.boredapi.com/api/activity`
- `https://www.boredapi.com/api/activity/random`

The endpoint tells the server what data you want.

### 2. Request method
A request method tells the server what action you want.

The most common one for beginners is:
- `GET` = ask for data

Other methods exist too:
- `POST` = send new data
- `PUT` or `PATCH` = update data
- `DELETE` = remove data

### 3. Query parameters
Query parameters are extra key/value pairs added to the end of a URL to filter or sort data.

Example:
- `https://example.com/api/users?age=20&sort=name`

Here:
- `age=20`
- `sort=name`

The `?` starts the query string, and `&` separates values.

### 4. Path parameters
Path parameters are part of the URL path itself and usually point to one specific item.

Example:
- `https://example.com/api/users/12`

Here, `12` could be the ID of one user.

## How to use an API
A basic flow looks like this:
1. Choose the API endpoint.
2. Send a request with the right method, usually `GET`.
3. Receive a response from the server.
4. Read the data, often in JSON format.
5. Show that data on the page.

## How APIs connect HTML, CSS, and JavaScript

### HTML
HTML gives the page structure.
It holds things like headings, buttons, and paragraphs.

### CSS
CSS makes the page look good.
It controls colors, spacing, layout, and font styles.

### JavaScript
JavaScript makes the page interactive.
It can:
- send API requests
- receive data
- update the HTML page with new information

So the usual relationship is:
- HTML builds the page
- CSS styles the page
- JavaScript talks to the API and changes the page

## Simple example
If a button is clicked on a page:
- HTML provides the button
- JavaScript listens for the click
- JavaScript sends a request to the API
- the API sends back data
- JavaScript puts that data into the HTML

## Public vs private APIs

### Public API
A public API can be used by many developers.
Some are free, some need an account or key.

### Private API
A private API is used inside one company or system.
It is not meant for public use.

## Example from the lecture
The lecture used the bored API to show how requests work.

Key ideas:
- use an endpoint like `/random`
- send a `GET` request
- use Postman to test the request
- use query parameters to filter results
- use path parameters to target one exact resource

## Postman
Postman is a tool for testing APIs before you write code.
It helps you:
- send requests
- see responses
- test endpoints
- understand what data comes back

## Main idea to remember
An API is the bridge between your front end and your back end.
JavaScript usually handles the request, HTML displays the result, and CSS makes it presentable.

## Short summary
APIs let websites get and send data. You use endpoints, request methods, query parameters, and path parameters to talk to a server. In a web page, JavaScript usually calls the API, then updates the HTML with the data.
