# API Authentication — Beginner-Friendly Notes

## 1. What is API authentication?

An **API** (Application Programming Interface) lets one program communicate with another. For example, a weather app can ask a weather API for today's forecast.

**Authentication** answers: **“Who is making this request?”**

It prevents unknown people or programs from using private API endpoints. A server checks proof supplied by the client before returning protected data.

### Authentication vs authorization

These ideas are related, but different:

| Term | Question answered | Example |
| --- | --- | --- |
| Authentication | Who are you? | “This token belongs to Priya.” |
| Authorization | What may you do? | “Priya may read orders but may not delete them.” |

In short: **authenticate first, then authorize**.

## 2. Important words

- **Client**: the app making an API request (browser, mobile app, backend service, Postman, etc.).
- **Server / API**: the system receiving the request.
- **Credential**: secret proof of identity, such as a password, API key, token, or certificate.
- **User**: a human who signs in.
- **Service account**: a non-human identity used by one system to call another system.
- **Endpoint**: a URL exposed by an API, such as `GET /api/profile`.
- **Header**: request metadata sent with HTTP. Authentication credentials are commonly sent here.
- **Token**: a string representing an authenticated identity or permission.
- **Secret**: a value that must never be exposed publicly, committed to Git, or put in client-side code.

## 3. HTTP request basics

An authenticated request often looks like this:

```http
GET /api/profile HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOi...
```

The server reads the `Authorization` header, validates its value, identifies the caller, then checks whether that caller can access `/api/profile`.

Common HTTP responses:

| Status | Meaning |
| --- | --- |
| `200 OK` | Request succeeded. |
| `201 Created` | A new resource was created. |
| `400 Bad Request` | The request data is invalid. |
| `401 Unauthorized` | Authentication is missing, invalid, or expired. (Despite the name, it usually means *not authenticated*.) |
| `403 Forbidden` | The caller is authenticated but lacks permission. |
| `404 Not Found` | Resource/endpoint does not exist; some APIs also use it to hide protected resources. |
| `429 Too Many Requests` | Rate limit exceeded. |

## 4. Main authentication methods

### A. API keys

An **API key** is a long secret string that identifies the calling application or account.

```http
GET /v1/weather?city=Delhi
X-API-Key: your_api_key_here
```

Some APIs accept keys in a query parameter:

```text
GET /v1/weather?city=Delhi&api_key=your_api_key_here
```

Prefer headers where the API supports them. Query strings can be saved in browser history, logs, proxies, and analytics tools.

**Good for:** simple server-to-server integrations, public developer APIs, usage tracking, rate limits.

**Limitations:** an API key normally proves the *application*, not a particular signed-in user. It can be copied and used by anyone who gets it.

### B. Basic authentication

Basic auth sends a username and password encoded with Base64:

```http
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

Base64 is **encoding, not encryption**. Anyone who intercepts it can decode it. Therefore Basic auth must only be used over **HTTPS**.

**Good for:** simple internal tools, legacy APIs, short-lived testing.

**Limitations:** repeatedly sending a password is risky; it is not ideal for modern user-facing apps.

### C. Bearer tokens

A bearer token is supplied in the `Authorization` header:

```http
Authorization: Bearer <access_token>
```

“Bearer” means whoever possesses the token can use it. Treat it like a password.

**Good for:** most modern APIs. Access tokens are usually short-lived and can include user identity and allowed permissions.

### D. Session cookies

After a user logs in, a server can create a session and send a cookie:

```http
Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Lax
```

The browser automatically sends the cookie on later requests to that site.

**Good for:** traditional web apps where the frontend and backend are closely related.

**Important:** cookie-based authentication needs CSRF protection because browsers may send cookies automatically.

### E. JWT (JSON Web Token)

A JWT is a common token format. It has three Base64URL-encoded sections separated by dots:

```text
header.payload.signature
```

Example decoded payload:

```json
{
  "sub": "user_123",
  "email": "priya@example.com",
  "role": "user",
  "iat": 1760000000,
  "exp": 1760003600
}
```

- `sub`: subject/identity
- `iat`: issued-at time
- `exp`: expiry time

The **signature** lets the API verify that the token was issued by a trusted party and has not been altered.

**JWT facts to remember:**

- A JWT is usually **signed**, not encrypted. Do not put passwords, card numbers, or other sensitive data in its payload.
- The server must verify its signature, expiry, issuer, and intended audience.
- A JWT is a format, not an authentication system by itself.
- Short-lived JWT access tokens reduce damage if stolen.

### F. OAuth 2.0 and OpenID Connect (OIDC)

**OAuth 2.0** lets an application obtain limited access to another service without learning the user’s password. Example: allowing a calendar app to access your Google Calendar.

**OpenID Connect (OIDC)** builds on OAuth 2.0 to add user sign-in/identity information. “Sign in with Google” is commonly OIDC.

Key roles:

| Role | Meaning |
| --- | --- |
| Resource owner | The user who owns the data. |
| Client | The app requesting access. |
| Authorization server | Logs in the user and issues tokens. |
| Resource server | The API holding protected data. |

For browser and mobile apps, the recommended modern flow is **Authorization Code Flow with PKCE**:

1. The app redirects the user to the authorization server.
2. The user logs in and approves requested permissions.
3. The authorization server redirects back with a short-lived authorization code.
4. The app exchanges the code (and PKCE verifier) for tokens.
5. The app sends the access token to the API.

Never place a client secret in browser JavaScript or a mobile app: users can extract it. Public clients use PKCE instead.

### G. Client credentials flow

This OAuth flow is for **machine-to-machine** access, with no user involved.

```text
Backend service → token endpoint (client ID + client secret) → access token → API
```

Use a separate service identity and the minimum required permissions.

### H. Request signing (HMAC)

Instead of only sending a secret, the client uses the secret to sign parts of each request. The server calculates the same signature and compares it.

Conceptually:

```text
signature = HMAC(secret, method + path + timestamp + body)
```

It can help detect altered requests and, with timestamps/nonces, replay attacks.

**Good for:** payment APIs, webhooks, and high-integrity server-to-server APIs.

## 5. Access tokens and refresh tokens

Many systems use two tokens:

| Token | Purpose | Typical lifetime |
| --- | --- | --- |
| Access token | Sent to APIs to make requests. | Minutes to about an hour |
| Refresh token | Used only to obtain a new access token. | Days, weeks, or longer |

When the access token expires:

1. The client sends its refresh token to a dedicated token endpoint.
2. The server validates it.
3. The server returns a new short-lived access token (and sometimes a replacement refresh token).

Keep refresh tokens especially safe. Rotate them where possible: when one is used, issue a new one and invalidate the old one.

## 6. Authentication flow example

### Login with email and password

1. User submits email and password through HTTPS.
2. Server finds the user and compares the password with its stored password hash.
3. If valid, server creates a session or issues access/refresh tokens.
4. Client stores and sends the credential safely on later requests.
5. Middleware on protected endpoints validates the credential.
6. Authorization rules decide what the authenticated user may do.

The server should store **password hashes**, never plain-text passwords. Common password-hashing algorithms are Argon2, bcrypt, and scrypt.

## 7. Where to store credentials

### On the server

Store secrets in environment variables or a dedicated secret manager, not in source code.

```env
PAYMENT_API_KEY=replace_with_real_secret
JWT_SECRET=replace_with_a_long_random_secret
```

Add `.env` to `.gitignore`, but remember: a file ignored today may have been committed earlier. If a secret is exposed, **revoke/rotate it**; deleting the line is not enough.

### In a browser

There is no perfect storage choice; choose based on your architecture:

- **`HttpOnly`, `Secure`, `SameSite` cookies** protect tokens from JavaScript access and are often a strong choice for web apps. Handle CSRF properly.
- **In-memory storage** reduces persistence but tokens disappear on refresh.
- **`localStorage`** is convenient but JavaScript can read it, so XSS can steal tokens. Avoid it for high-risk tokens when a safer cookie-based design is practical.

Never expose private API keys, database passwords, or privileged service tokens in frontend code. Anything sent to the browser can be copied.

## 8. Security checklist

- Use **HTTPS everywhere**. Do not send credentials over plain HTTP.
- Put credentials in headers or secure cookies, not URLs.
- Use short expiry times for access tokens.
- Use strong, random secrets; never invent predictable keys.
- Hash passwords with Argon2, bcrypt, or scrypt plus appropriate settings.
- Validate token signature, algorithm, expiry (`exp`), issuer (`iss`), and audience (`aud`).
- Never accept an unsigned JWT or trust the token's declared algorithm without validation.
- Apply least privilege: give only the scopes/roles needed.
- Check authorization on every protected resource. A valid token alone does not mean a user owns every record.
- Rate-limit login and token endpoints; consider lockout/backoff and MFA for sensitive accounts.
- Sanitize and validate input; protect against XSS, injection, and CSRF as applicable.
- Do not log passwords, raw access tokens, API keys, authorization headers, or refresh tokens.
- Rotate and revoke credentials. Have a response plan for leaks.
- Keep authentication libraries updated instead of writing cryptography yourself.

## 9. Roles, permissions, and scopes

Authentication identifies a caller. Authorization controls access.

- **Role-based access control (RBAC):** permissions are grouped into roles such as `admin`, `editor`, and `viewer`.
- **Permission-based access:** directly assign abilities such as `orders:read` or `orders:refund`.
- **Scopes:** named permissions issued with an OAuth token, such as `profile.read` or `calendar.write`.

Example rule:

```text
User is authenticated?          Yes
Token has orders:read scope?    Yes
User owns order #A42?           Yes
→ Return the order
```

Checking ownership is crucial. Otherwise, changing `/orders/42` to `/orders/43` might expose someone else’s data. This is commonly called an **IDOR/BOLA** vulnerability.

## 10. Simple JavaScript examples

### Calling an API with a bearer token

```js
const response = await fetch("https://api.example.com/profile", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

if (response.status === 401) {
  // Token may be missing, invalid, or expired.
}
```

### Calling an API from a backend with an API key

```js
const response = await fetch("https://api.example.com/v1/data", {
  headers: {
    "X-API-Key": process.env.EXAMPLE_API_KEY,
  },
});
```

Do not put `EXAMPLE_API_KEY` in code that runs in a user’s browser.

### Express middleware idea

```js
function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return res.status(401).json({ error: "Authentication required" });

  try {
    req.user = verifyAccessToken(token); // Verify signature + claims in real code.
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
```

In production, use a well-maintained library and ensure `verifyAccessToken` checks the expected algorithm and claims.

## 11. CORS is not authentication

**CORS** (Cross-Origin Resource Sharing) is a browser rule that controls which websites may make cross-origin requests to an API. It does not identify users and does not protect an API from direct calls made outside a browser.

Use CORS alongside real authentication and authorization.

## 12. Webhooks: verifying the sender

A webhook is an incoming request from another service. Do not assume it is genuine merely because it reaches your endpoint.

Typical verification steps:

1. Read the raw request body.
2. Get the signature header and timestamp supplied by the provider.
3. Calculate the expected HMAC using your webhook signing secret.
4. Compare signatures safely and reject stale timestamps.
5. Process the event only after verification; make handling idempotent because events can be retried.

## 13. Common mistakes and fixes

| Mistake | Better approach |
| --- | --- |
| Committing `.env` or a key to GitHub | Ignore secret files; rotate any exposed credential immediately. |
| Sending API keys in frontend code | Call the third-party API from your backend when the key is private. |
| Using HTTP | Use HTTPS and redirect/reject HTTP. |
| Treating a JWT payload as secret | JWT payloads are readable; keep sensitive data out. |
| Only checking that a user is logged in | Also verify role, scope, and resource ownership. |
| Long-lived access tokens | Use short-lived access tokens and a protected refresh mechanism. |
| Returning vague or overly detailed errors | Give useful but safe messages; do not reveal secrets or account existence unnecessarily. |
| Logging authorization headers | Redact sensitive headers and tokens from logs. |

## 14. Choosing a method

| Situation | Usual choice |
| --- | --- |
| Simple backend calling a third-party API | API key stored in server environment variables |
| Web app login | Secure session cookie or OIDC/OAuth-based login |
| Mobile app login | OAuth/OIDC Authorization Code Flow with PKCE |
| One backend service calling another | OAuth client credentials, mTLS, or signed requests |
| “Sign in with Google/GitHub” | OpenID Connect / OAuth 2.0 |
| Receiving payment/provider webhooks | HMAC signature verification |

The API provider’s official documentation always decides the exact headers, token endpoint, scopes, and verification requirements.

## 15. Practical testing with Postman or curl

Bearer token using curl:

```bash
curl https://api.example.com/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

API key using curl:

```bash
curl https://api.example.com/v1/data \
  -H "X-API-Key: YOUR_API_KEY"
```

For testing, use separate development credentials with limited permissions. Revoke a key if it is accidentally pasted into a public place.

## 16. Quick revision

1. Authentication proves identity; authorization decides permissions.
2. Use HTTPS for every authenticated API request.
3. API keys suit simple app/service identification, but must stay secret.
4. Bearer tokens are secrets: anyone holding one may use it.
5. JWTs are signed tokens whose payload is readable; validate their signature and claims.
6. OAuth/OIDC enables delegated access and modern sign-in; use Authorization Code + PKCE for public apps.
7. Use short-lived access tokens, protect refresh tokens, and rotate/revoke leaked credentials.
8. Always check permissions and resource ownership after authenticating.
