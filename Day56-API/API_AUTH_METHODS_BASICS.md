# API Authentication Methods — Basics

These notes explain four common ways an API can handle access:

1. No authentication
2. Basic authentication
3. API key authentication
4. Token-based authentication

## 1. No authentication

An API with **no authentication** lets anyone send requests without proving who they are.

```http
GET /api/public-quotes HTTP/1.1
Host: example.com
```

The request contains no password, key, or token.

### When is it useful?

- Public information, such as public holidays or open weather data
- Demo or learning APIs
- Data that is safe for everyone to read

### Advantages

- Very easy to use
- No login or credentials to manage
- Good for truly public content

### Risks and limitations

- Anyone can use the API
- Anyone may automate requests or misuse it
- The API cannot identify individual callers
- Rate limits are harder to apply fairly
- It must never expose private data or actions such as updating or deleting data

Even a public API should usually use HTTPS, input validation, rate limiting, and monitoring.

## 2. Basic authentication

**Basic authentication** sends a username and password with each request.

```http
GET /api/profile HTTP/1.1
Host: example.com
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

The value after `Basic` is:

```text
Base64(username:password)
```

For example:

```text
priya:myPassword123
```

becomes a Base64 string and is sent in the header.

### Important: Base64 is not encryption

Base64 only changes the format of text. It is easy to decode, so Basic authentication must always be used with **HTTPS**. Without HTTPS, someone who intercepts the request can recover the username and password.

### Example with curl

```bash
curl -u username:password https://api.example.com/profile
```

### Advantages

- Simple and widely supported
- Easy to test with browsers, curl, or Postman
- Useful for small internal or legacy APIs

### Limitations

- The password is sent on every request
- Stolen credentials can be reused until changed
- It is not ideal for modern user-facing applications
- HTTPS is mandatory

## 3. API key authentication

An **API key** is a long secret string issued to an application, developer, or service. The API uses it to recognize the caller.

### Key in a request header

```http
GET /v1/weather?city=Delhi HTTP/1.1
Host: api.example.com
X-API-Key: your_api_key_here
```

### Key in a query parameter

```http
GET /v1/weather?city=Delhi&api_key=your_api_key_here
```

When possible, send an API key in a **header** rather than a URL. URLs can be stored in browser history, server logs, proxy logs, and analytics tools.

### Example with JavaScript (backend code)

```js
const response = await fetch("https://api.example.com/v1/weather?city=Delhi", {
  headers: {
    "X-API-Key": process.env.WEATHER_API_KEY,
  },
});
```

### What API keys are good for

- Identifying a calling application
- Applying rate limits and usage quotas
- Simple server-to-server API access
- Tracking which developer or project uses an API

### Important security rule

Do not put a private API key in browser JavaScript, a public Git repository, screenshots, or client-side mobile code. Users can inspect and copy it.

Store server-side keys in environment variables or a secret manager:

```env
WEATHER_API_KEY=your_real_secret_key
```

### Limitations

- An API key often identifies the application, not the individual end user
- Anyone who steals the key can use it
- Keys normally do not expire automatically unless the provider supports it
- API keys alone are usually not enough for sensitive user accounts

If a key leaks, revoke it and create a replacement. Removing it from code does not make a copied key safe again.

## 4. Token-based authentication

With **token-based authentication**, a user or application first proves its identity, then receives a token. The client sends that token on later API requests instead of sending the password repeatedly.

### Typical flow

1. User submits login details to a login endpoint over HTTPS.
2. Server verifies the credentials.
3. Server issues an access token.
4. Client sends the access token when calling protected endpoints.
5. Server verifies the token and checks permissions.

### Example login response

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Example protected request

```http
GET /api/orders HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOi...
```

`Bearer` means the person who possesses the token can use it. Treat it like a password.

### Access tokens and refresh tokens

Many systems issue two tokens:

| Token | Job | Lifetime |
| --- | --- | --- |
| Access token | Sent to the API for normal requests | Short, often minutes to an hour |
| Refresh token | Used to request a new access token | Longer, often days or weeks |

Short-lived access tokens reduce the impact of a stolen token. Refresh tokens need stronger protection because they can keep creating new access tokens.

### JWT tokens

A **JWT** (JSON Web Token) is a popular token format. It commonly looks like this:

```text
header.payload.signature
```

Its payload might contain information such as a user ID, role, and expiry date. The server checks the signature to confirm the token is valid and was not modified.

Remember:

- JWT payloads are usually readable, not secret.
- Do not store passwords or sensitive personal data in a JWT payload.
- Always validate the signature and expiration time.
- A JWT is one kind of token; token-based authentication does not always use JWTs.

### Advantages

- Password is not sent with every request
- Tokens can expire, be scoped, and be revoked
- Works well for web apps, mobile apps, and APIs
- Can represent a user’s identity and permissions

### Limitations

- More setup than Basic auth or API keys
- Tokens must be stored and transmitted safely
- Stolen bearer tokens can be used by attackers until they expire or are revoked

## Comparison

| Method | Credential sent | Best for | Main concern |
| --- | --- | --- | --- |
| No authentication | Nothing | Truly public read-only data | Anyone can access it |
| Basic authentication | Username + password, Base64-encoded | Small internal or legacy APIs | Password sent on every request |
| API key | Application secret | Simple service integrations | Key theft and weak user identity |
| Token-based authentication | Short-lived access token | Modern user or app authentication | Safe token storage and expiry |

## Choosing the right method

- Use **no authentication** only when all data and actions are intentionally public.
- Use **Basic authentication** for simple, controlled, HTTPS-only use cases; avoid it for most new public apps.
- Use an **API key** when identifying the calling application is enough.
- Use **token-based authentication** when users sign in, permissions vary by user, or you need expiration and better control.

## Quick security checklist

- Always use HTTPS.
- Do not put passwords, tokens, or private API keys in URLs.
- Never commit secrets to Git.
- Keep secrets in environment variables or a secret manager.
- Use short expiry times for access tokens.
- Return `401 Unauthorized` for missing, invalid, or expired credentials.
- Return `403 Forbidden` when a valid caller does not have permission.
- Check permissions and resource ownership after authentication.
- Do not log raw passwords, API keys, or authorization headers.
- Revoke and rotate any credential that may have leaked.
