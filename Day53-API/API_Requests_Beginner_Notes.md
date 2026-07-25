# Structuring API Requests — Beginner-Friendly Notes

## 1. What is an API?

An **API** (**Application Programming Interface**) is a set of rules that lets one piece of software communicate with another.

For a web application, the usual flow is:

```text
Front end (browser/app) → API request → Back end (server/database) → API response → Front end
```

- The **front end** is the part a user sees and interacts with.
- The **back end** handles application logic, data storage, and processing.
- The **API** is the controlled interface between them.

Think of an API as a restaurant waiter: the customer does not walk into the kitchen; they place a structured order through the waiter and receive a structured result.

## 2. Private APIs and Public APIs

### Private API

A **private API** is intended for internal use, such as communication between the front end and back end of the same company’s application. Access is usually restricted with authentication and authorization.

### Public API

A **public API** is made available for outside developers to use. It normally has documentation explaining its endpoints, request rules, rate limits, and authentication requirements.

> Public does not mean “unprotected.” A public API can be discoverable by anyone while still requiring an API key, OAuth token, or user login before data is returned.

## 3. API Endpoints

An **endpoint** is a server path that performs a particular API function. It is commonly combined with a **base URL**.

```text
Base URL:  https://api.example.com
Endpoint:  /activities/random
Full URL:  https://api.example.com/activities/random
```

Each endpoint is designed for a purpose, for example:

- `GET /activities/random` — retrieve one random activity
- `GET /activities/filter` — retrieve activities matching criteria
- `GET /users/42` — retrieve the user with ID `42`

Endpoints are often paired with an HTTP method:

| HTTP method | Usual purpose |
| --- | --- |
| `GET` | Read or retrieve data |
| `POST` | Create data or submit an action |
| `PUT` / `PATCH` | Update existing data |
| `DELETE` | Remove data |

## 4. The Bored API Example

The Bored API is a simple example for practicing API requests. Its documentation describes which endpoints exist and what information each request can accept.

Two useful concepts from this example are:

- A `/random` endpoint can return a random activity.
- A `/filter` endpoint can return activities matching supplied conditions.

Before using any API, read its documentation. Look for the base URL, available endpoints, required HTTP method, accepted parameters, authentication rules, examples, and error responses.

## 5. Making a `GET` Request

A `GET` request asks the server to send data. You can test one in a tool such as **Postman**, your browser (for simple public `GET` endpoints), or code.

Example request structure:

```http
GET https://api.example.com/activities/random
```

The server returns an **HTTP response**. A response includes:

- a **status code**, such as `200 OK` or `404 Not Found`
- **headers**, which carry metadata
- a **body**, which commonly contains JSON data

Common status codes:

| Status | Meaning |
| --- | --- |
| `200 OK` | Request succeeded |
| `201 Created` | A new resource was created |
| `400 Bad Request` | The request is invalid or incomplete |
| `401 Unauthorized` | Authentication is required or failed |
| `403 Forbidden` | You are authenticated but lack permission |
| `404 Not Found` | The endpoint or resource does not exist |
| `429 Too Many Requests` | A rate limit was exceeded |
| `500 Internal Server Error` | The server encountered a problem |

## 6. Query Parameters

**Query parameters** send optional details to an endpoint. They appear after a `?` in the URL as `key=value` pairs.

```text
https://api.example.com/activities/filter?type=education&participants=1
```

In this example:

- `type=education` filters for educational activities.
- `participants=1` filters for activities for one participant.
- Multiple parameters are joined with `&`.

Query parameters are often used for filtering, sorting, searching, pagination, and selecting optional response fields.

```text
GET /products?category=books&sort=price&page=2
```

## 7. Path Parameters

**Path parameters** identify a specific resource as part of the endpoint path.

```text
GET /users/42
```

Here, `42` is a path parameter that identifies one user. In documentation, it may be written as a placeholder:

```text
GET /users/{userId}
```

Use a path parameter when the request is about one specific resource. Use query parameters when modifying, filtering, or refining a request.

| Request | Parameter type | Meaning |
| --- | --- | --- |
| `/users/42` | Path parameter | Get the user whose ID is 42 |
| `/users?role=student` | Query parameter | Get users with the role `student` |

## 8. URL Anatomy

```text
https://api.example.com:443/v1/users/42?include=profile
│       │               │    │  │        │  └─ query parameter
│       │               │    │  │        └─ path parameter
│       │               │    │  └─ endpoint path
│       │               │    └─ API version
│       │               └─ port (usually omitted because HTTPS defaults to 443)
│       └─ domain / host
└─ protocol
```

The next topic is usually the response body, especially **JSON** (**JavaScript Object Notation**), the common format APIs use to return structured data.
