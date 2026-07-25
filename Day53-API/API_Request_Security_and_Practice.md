# API Requests — Security Mindset and Practice

## A beginner cybersecurity view

An API is an entry point into an application’s data and functionality. Good API design gives users only the access they need, verifies every request, and safely handles invalid input.

When you make an API request, remember: the server should never trust data simply because it came from a web page, mobile app, or API client.

## 1. Use HTTPS

Prefer URLs beginning with `https://`, not `http://`.

**HTTPS** encrypts traffic between the client and server. Without it, information such as login credentials, API tokens, query parameters, and responses may be exposed or altered in transit.

```text
Good:  https://api.example.com/users
Risky: http://api.example.com/users
```

## 2. Authentication vs Authorization

These terms are related but different:

- **Authentication** answers: “Who are you?” Examples include passwords, API keys, session cookies, and bearer tokens.
- **Authorization** answers: “What are you allowed to do?” For example, a normal user may view their own profile but not another user’s private data.

An API might use an `Authorization` header:

```http
Authorization: Bearer YOUR_TOKEN
```

Never share real tokens in screenshots, public repositories, chat messages, or client-side code that anyone can inspect.

## 3. Keep Secrets Out of URLs

URLs are commonly saved in browser history, proxy logs, server logs, analytics tools, and referrer headers. Therefore, do **not** put passwords, API keys, access tokens, or personal data in query parameters.

```text
Avoid: GET /account?apiKey=secret-value
Prefer: Authorization: Bearer secret-value
```

Even request headers must be protected: use HTTPS and store secrets in environment variables or a secure secret manager, not directly in source code.

## 4. Validate Parameters

Whether parameters are query parameters, path parameters, headers, or JSON body fields, they are **untrusted input**.

The server should validate:

- data type — is `userId` actually a number or valid UUID?
- allowed range — is `page` positive and within a reasonable limit?
- format — is an email address or date valid?
- allowed values — does `sort` match a supported option?
- permissions — may this authenticated user access this resource?

For example, a client request such as `/users/42` must not automatically be trusted. The server should check that the requester is permitted to view user 42. This prevents **Broken Object Level Authorization (BOLA)**, also called **IDOR** (**Insecure Direct Object Reference**).

## 5. Least Privilege and Safe Responses

Apply the **principle of least privilege**: give a user, API key, or service only the permissions needed for its task.

Also return only necessary fields. A public profile response should not include password hashes, reset tokens, internal roles, database details, or private contact information.

## 6. Error Handling

Clear error codes help clients respond correctly, but detailed internal errors can help attackers learn about an application.

```json
{
  "error": "Invalid request"
}
```

This is safer for a public response than exposing a database query, file path, stack trace, or secret configuration. Record detailed diagnostics securely on the server instead.

## 7. Rate Limits

APIs often use **rate limiting** to restrict how many requests a client can make in a time period. It helps reduce abuse, brute-force login attempts, scraping, and accidental overload.

If you receive `429 Too Many Requests`, slow down and follow the API documentation instead of repeatedly retrying immediately.

## 8. Postman Practice Checklist

When exploring an API in Postman:

1. Read the API documentation and identify the base URL and endpoint.
2. Select the required HTTP method, such as `GET`.
3. Add permitted query parameters using the Params tab.
4. Add authentication only when the documentation requires it.
5. Send the request and inspect the status code, headers, and JSON response.
6. Try a harmless invalid parameter to understand error handling.
7. Do not use real secrets in a shared collection or public workspace.

## 9. Quick Request Checklist

Before sending a request, ask:

- Is the endpoint URL correct and using HTTPS?
- Am I using the right HTTP method?
- Are path and query parameters correctly formatted and URL-encoded where needed?
- Does the request require authentication?
- Have I avoided putting sensitive data in the URL?
- What status codes and JSON structure should I expect?
- Am I respecting the API’s rate limit and terms of use?

## Key Takeaway

A well-structured API request is precise: correct URL, endpoint, HTTP method, parameters, and authentication. A secure API request also protects sensitive data, treats all input as untrusted, and uses only the permissions required.
