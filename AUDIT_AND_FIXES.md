# RoyalWatches — Audit & Fixes Documentation

**Date:** June 2026  
**Scope:** Full-stack audit and remediation of the RoyalWatches e-commerce platform  
**Stack:** Node.js / Express / MongoDB (Mongoose) — React 18 / Vite / Redux Toolkit / Tailwind CSS

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Backend Audit](#2-backend-audit)
3. [Backend Fixes — 20 Issues](#3-backend-fixes--20-issues)
4. [Backend Critical Path — 7/10 Features](#4-backend-critical-path--710-features)
5. [Frontend Audit](#5-frontend-audit)
6. [Frontend Fixes](#6-frontend-fixes)
7. [Environment Variables Reference](#7-environment-variables-reference)
8. [API Reference](#8-api-reference)
9. [Remaining Work](#9-remaining-work)

---

## 1. Project Overview

RoyalWatches is a full-stack e-commerce application for selling luxury watches. It consists of three packages:

| Package | Path | Description |
|---------|------|-------------|
| `backend` | `/backend` | Express REST API, MongoDB, JWT auth, Stripe payments |
| `frontend` | `/frontend` | React SPA, Redux state management, Tailwind CSS |
| `admin` | `/admin` | React admin dashboard |

### Architecture

```
Browser (React SPA)
      │
      │ HTTPS
      ▼
Express API (Node.js)
      │
      ├── MongoDB Atlas (data)
      ├── Stripe (payments)
      └── SMTP (email — nodemailer)
```

---

## 2. Backend Audit

**Initial Rating: 4.5 / 10**

The backend had a functional CRUD structure but contained critical security vulnerabilities, runtime-crashing bugs, and was missing features required for a production e-commerce store.

### 2.1 Critical Bugs Found

| # | File | Issue |
|---|------|-------|
| 1 | `controllers/users.js:16` | `bcrypt.hash()` result discarded — passwords never updated |
| 2 | `controllers/users.js:49` | `user._doc.password` doesn't exist — `passwordHash` leaked in response |
| 3 | `controllers/order.js:114` | `.count()` removed in Mongoose 8 — crashes at runtime |
| 4 | `controllers/order.js:77` | `date.setMonth()` mutates shared variable — income query uses wrong dates |

### 2.2 Security Issues Found

| # | File | Issue |
|---|------|-------|
| 5 | `controllers/users.js:20` | `$set: req.body` — user can set `isAdmin: true` on their own account |
| 6 | `controllers/cart.js:25` | `verifyTokenAndAuthorization` compared user ID to cart document ID — always false for regular users |
| 7 | `controllers/stripe.js:4` | Stripe payment endpoint had no authentication middleware |
| 8 | `controllers/verifyToken.js` | `isAdmin` trusted from JWT only — DB never consulted for revocations |
| 9 | `utils/middleware.js:6` | Request logger logged plaintext passwords on every login |
| 10 | All controllers | `res.status(500).json(err)` exposed full Mongoose error objects to clients |
| 11 | `app.js:35` | `cors()` with no config allowed requests from any origin |
| 12 | `controllers/auth.js` | No rate limiting on login — unlimited brute-force attempts allowed |

### 2.3 Data Integrity Issues Found

| # | File | Issue |
|---|------|-------|
| 13 | `models/order.js`, `models/cart.js` | `userId`/`productId` stored as `String` — no referential integrity |
| 14 | `models/cart.js` | No uniqueness constraint — one user could have multiple carts |
| 15 | `models/order.js` | `status` field was a free-form String — any value accepted |

### 2.4 Code Quality Issues Found

| # | File | Issue |
|---|------|-------|
| 16 | `controllers/verifyToken.js:4` | Non-standard `token` header instead of `Authorization: Bearer` |
| 17 | All controllers | Dead `verifyToken` import (the base middleware, not the exported ones) |
| 18 | All collection endpoints | No pagination — `GET /products` returned entire collection |
| 19 | `index.js:7` | Port log showed `undefined` when `PORT` env var was unset |
| 20 | `app.js:16` | `mongoose.set('strictQuery', false)` silenced schema validation errors |

---

## 3. Backend Fixes — 20 Issues

### Fix 1 — Password hash discarded on update

**File:** `controllers/users.js`

```js
// BEFORE — hash computed but result thrown away; plaintext stored
if (req.body.password) {
  await bcrypt.hash(req.body.password, saltRounds)
}
$set: req.body  // stores req.body.password (plaintext) directly

// AFTER — hash assigned; only whitelisted fields stored
if (req.body.password) {
  updates.passwordHash = await bcrypt.hash(req.body.password, 10)
}
$set: updates  // only { username?, email?, passwordHash? }
```

### Fix 2 — `user._doc.password` doesn't exist

**File:** `controllers/users.js`

Removed the manual `user._doc` access. The User model's `toJSON` transform already strips `passwordHash` and `__v` automatically. The route now returns `user` directly after `findByIdAndUpdate`.

### Fix 3 — `.count()` deprecated

**File:** `controllers/order.js`

```js
// BEFORE
const orders = await Order.find().count();

// AFTER
const count = await Order.countDocuments();
```

### Fix 4 — Date mutation in income query

**File:** `controllers/order.js`

```js
// BEFORE — date.setMonth() mutated shared variable
const date = new Date();
const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

// AFTER — fresh Date per variable, no shared mutation
const now = new Date();
const previousMonth = new Date(now.getFullYear(), now.getMonth() - 2, 1);
```

### Fix 5 — Mass assignment privilege escalation

**File:** `controllers/users.js`

```js
// BEFORE — any field including isAdmin could be set
$set: req.body

// AFTER — explicit whitelist only
const updates = {}
if (req.body.password) updates.passwordHash = await bcrypt.hash(req.body.password, 10)
if (req.body.username !== undefined) updates.username = req.body.username
if (req.body.email !== undefined) updates.email = req.body.email
$set: updates
```

Also applied to `controllers/cart.js` (only `products` array allowed) and `controllers/order.js` (only `status` allowed).

### Fix 6 — Cart authorization checked wrong IDs

**File:** `controllers/cart.js`

`verifyTokenAndAuthorization` compares `req.user.id === req.params.id`. For cart PUT/DELETE, `req.params.id` is the cart document ID, not the user ID — the comparison always fails for non-admins.

```js
// BEFORE — regular users could never modify their own cart
cartRouter.put("/:id", verifyTokenAndAuthorization, ...)

// AFTER — fetch cart first, verify ownership explicitly
cartRouter.put("/:id", verifyToken, async (req, res, next) => {
  const cart = await Cart.findById(req.params.id);
  if (cart.userId.toString() !== req.user.id && !req.user.isAdmin) {
    return res.status(403).json("You are not allowed to do that!");
  }
  // ... update only { products } field
})
```

### Fix 7 — Stripe endpoint unauthenticated

**File:** `controllers/stripe.js`

```js
// BEFORE
stripeRouter.post("/payment", (req, res) => { ... })

// AFTER
stripeRouter.post("/payment", verifyToken, async (req, res, next) => { ... })
```

### Fix 8 — `isAdmin` trusted from JWT only

**File:** `controllers/verifyToken.js`

`verifyTokenAndAdmin` now makes a DB lookup to confirm the user is still an admin. Prevents a revoked admin from using an existing token.

```js
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.id);
    if (user && user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that!");
    }
  });
};
```

### Fix 9 — Request logger logged plaintext passwords

**File:** `utils/middleware.js`

```js
const SENSITIVE_FIELDS = ['password', 'passwordHash', 'token', 'secret']

const sanitizeBody = (body) => {
  const sanitized = { ...body }
  SENSITIVE_FIELDS.forEach(field => {
    if (field in sanitized) sanitized[field] = '[REDACTED]'
  })
  return sanitized
}
```

### Fix 10 — Full error objects sent to clients

All controller catch blocks changed from `res.status(500).json(err)` to `next(err)`. The global `errorHandler` in `utils/middleware.js` was updated with a safe fallback:

```js
// BEFORE — last line
next(error)  // re-throws, potentially crashes

// AFTER — last line
return response.status(500).json({ error: 'internal server error' })
```

### Fix 11 — CORS allowed all origins

**File:** `app.js`

```js
// BEFORE
app.use(cors())

// AFTER
const allowedOrigins = config.FRONTEND_URL
  ? [config.FRONTEND_URL]
  : ['http://localhost:3000', 'http://localhost:3001']

app.use(cors({ origin: allowedOrigins, credentials: true }))
```

Set `FRONTEND_URL` in `.env` to your production domain.

### Fix 12 — No rate limiting on login

**File:** `controllers/auth.js`

```js
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 20,
  message: { error: 'Too many login attempts, please try again later' },
})

authRouter.post('/login', loginLimiter, ...)
```

### Fix 13 — userId/productId stored as String

**Files:** `models/order.js`, `models/cart.js`

```js
// BEFORE
userId: { type: String, required: true }

// AFTER
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
```

Enables `.populate()` and proper referential integrity.

### Fix 14 — No one-cart-per-user constraint

**File:** `models/cart.js`

```js
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }
```

### Fix 15 — Order status accepts any string

**File:** `models/order.js`

```js
status: {
  type: String,
  enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
  default: "pending",
}
```

### Fix 16 — Non-standard auth header

**File:** `controllers/verifyToken.js`

```js
// BEFORE
const authHeader = req.headers.token;

// AFTER
const authHeader = req.headers.authorization;
if (authHeader && authHeader.startsWith("Bearer ")) {
  const token = authHeader.split(" ")[1];
  ...
}
```

### Fix 17 — Dead imports

Removed unused `verifyToken` (base middleware) import from `users.js`, `product.js`, `cart.js`, `order.js`.

### Fix 18 — No pagination

All collection GET endpoints now accept `?page=` and `?limit=` (max 100):

```js
const page = Math.max(1, parseInt(req.query.page) || 1);
const limit = Math.min(100, parseInt(req.query.limit) || 20);
const skip = (page - 1) * limit;
await Model.find().skip(skip).limit(limit);
```

### Fix 19 — Port logging showed `undefined`

**File:** `index.js`

```js
// BEFORE
const PORT = process.env.PORT || 3000
logger.info(`Server running on port ${config.PORT}`)  // config.PORT may be undefined

// AFTER
const PORT = config.PORT || 3000
logger.info(`Server running on port ${PORT}`)
```

### Fix 20 — `strictQuery: false`

**File:** `app.js`

Removed `mongoose.set('strictQuery', false)`. This was a backwards-compatibility shim from Mongoose 6→7 migration that silenced schema query validation errors.

---

## 4. Backend Critical Path — 7/10 Features

**Post-fixes rating: 7 / 10**

Six features were added to bring the backend to a production-shippable standard for a watch store.

### 4.1 Stripe Webhook Handler

**Files:** `controllers/stripe.js`, `app.js`

A Stripe webhook endpoint verifies payment server-side. This is the correct approach — client-side payment confirmation alone can be spoofed.

```
POST /api/checkout/webhook
```

**How it works:**
1. Frontend calls `POST /api/checkout/payment` → Stripe charge created with `metadata: { orderId }`
2. Frontend creates order with `paymentId: charge.id`
3. Stripe sends `charge.succeeded` webhook to `/api/checkout/webhook`
4. Webhook verifies signature using `STRIPE_WEBHOOK_SECRET`
5. Order status updated from `pending` → `processing`

**Critical setup:** The webhook route is mounted **before** `express.json()` in `app.js` because Stripe signature verification requires the raw request body:

```js
// app.js — order matters
app.post('/api/checkout/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook)
app.use(express.json({ limit: '10kb' }))
```

**To activate:** Register `POST https://yourdomain.com/api/checkout/webhook` in the Stripe Dashboard (Developers → Webhooks) for the `charge.succeeded` event. Copy the signing secret into `STRIPE_WEBHOOK_SECRET` in `.env`.

### 4.2 Email Service

**File:** `utils/email.js`

Three transactional emails powered by nodemailer:

| Function | Trigger | Content |
|----------|---------|---------|
| `sendOrderConfirmation` | `POST /api/orders` | Order ID, product list, total |
| `sendShippingNotification` | Order status → `shipped` | Order ID, dispatch confirmation |
| `sendPasswordReset` | `POST /api/auth/forgot-password` | Reset link (expires 1 hour) |

Email failures are caught and logged — they never fail the HTTP response.

**Configuration (`.env`):**
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your_app_password
```

For Gmail, use an [App Password](https://myaccount.google.com/apppasswords) with 2FA enabled. Any SMTP provider works (Mailgun, Postmark, SendGrid, etc.).

### 4.3 Password Reset Flow

**Files:** `controllers/auth.js`, `models/user.js`

Two new endpoints:

```
POST /api/auth/forgot-password    { email }
POST /api/auth/reset-password/:token  { password }
```

**Security design:**
- A `crypto.randomBytes(32)` token is generated
- Only the SHA-256 hash is stored in the DB (`user.passwordResetToken`)
- The raw token travels in the email link only — never stored
- Token expires after 1 hour (`passwordResetExpires`)
- `forgot-password` always returns 200 regardless of whether the email exists (prevents email enumeration)
- Token fields are stripped from all API responses via the `toJSON` transform
- Rate limited: 5 requests per hour per IP

**User model fields added:**
```js
passwordResetToken: String,    // SHA-256 hash
passwordResetExpires: Date,    // expiry timestamp
```

### 4.4 Watch-Specific Product Model

**File:** `models/product.js`

The product schema was rebuilt for the watch retail domain:

| Field | Type | Notes |
|-------|------|-------|
| `images` | `[String]` | Replaces single `img: String` — supports multiple angles |
| `brand` | `String` (required) | e.g. "Rolex", "Omega", "Seiko" |
| `movement` | `String` (enum) | `automatic`, `manual`, `quartz`, `solar`, `kinetic` |
| `caseDiameter` | `Number` | Millimetres |
| `caseThickness` | `Number` | Millimetres |
| `waterResistance` | `Number` | Metres |
| `glassMaterial` | `String` (enum) | `sapphire`, `mineral`, `acrylic`, `hardlex` |
| `strapMaterial` | `String` (enum) | `leather`, `rubber`, `nylon`, `stainless steel`, `titanium`, `ceramic` |
| `dialColor` | `String` | |
| `caseColor` | `String` | |
| `warranty` | `Number` | Months |
| `stock` | `Number` (min: 0) | Replaces boolean `inStock` |

A virtual `inStock` getter (`stock > 0`) is included for backwards compatibility with any frontend code reading the old field.

### 4.5 Helmet + Body Size Limit

**File:** `app.js`

```js
app.use(helmet())                       // 14 security response headers
app.use(express.json({ limit: '10kb' })) // rejects payloads > 10KB
```

Helmet sets: `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Strict-Transport-Security`, and more.

### 4.6 Inventory Stock Management

**Files:** `controllers/order.js`, `models/product.js`

When an order is placed, stock is atomically decremented per product using a conditional update. If any product is out of stock, all prior decrements in the same request are rolled back.

```js
// Atomic check-and-decrement (single DB operation)
const updated = await Product.findOneAndUpdate(
  { _id: item.productId, stock: { $gte: item.quantity } },
  { $inc: { stock: -item.quantity } },
  { new: true }
);

if (!updated) {
  // Roll back all previously decremented products
  await Promise.all(
    decremented.map(d =>
      Product.findByIdAndUpdate(d.productId, { $inc: { stock: d.quantity } })
    )
  );
  return res.status(400).json({ error: `Insufficient stock for product ${item.productId}` });
}
```

---

## 5. Frontend Audit

**Initial Rating: 3.5 / 10**

### 5.1 Critical Bugs Found

| # | File | Issue |
|---|------|-------|
| 1 | `service/requestMethods.js:7` | Token read at module import (before login) — all authenticated requests sent without token |
| 1b | `service/requestMethods.js:19` | Header sent as `token: Bearer` but backend expected `Authorization: Bearer` |
| 2 | `component/pages/Cart.jsx:98` | Operator precedence bug + shipping fee subtracted instead of added — wrong order total |
| 3 | `component/pages/Cart.jsx:22` | `cart.carts[userId]` accessed without null check — crashes for new users |
| 4 | `App.jsx:63` | `/userprofile` route unprotected — unauthenticated users got a crash, not a redirect |

### 5.2 Security Issues Found

| # | Issue |
|---|-------|
| 5 | JWT stored in `localStorage` — vulnerable to XSS |
| 6 | NY Times API key committed to `.env` (baked into Vite build) |
| 7 | Backend URL hardcoded in source — no environment switching |
| 8 | Order amount computed client-side — manipulable by users |

### 5.3 State Management Issues Found

| # | File | Issue |
|---|------|-------|
| 9 | `redux/userRedux.js` | `error: false` boolean — impossible to show users why login failed |
| 10 | `redux/wishlistRedux.js` | Products nested as `{ product: {...} }` — inconsistent with cart's flat schema |
| 11 | `component/Hero_Products.jsx` | Favorite/cart buttons used local `useState` — state lost on navigation |
| 12 | `redux/cartRedux.js` | No deduplication — same product could be added multiple times |

### 5.4 Architecture Issues Found

| # | Files | Issue |
|---|-------|-------|
| 13 | `App.jsx` | All 18 pages statically imported — entire app bundle downloaded on first visit |
| 14 | `Hero_slider.jsx`, `MenHero.jsx`, `WomenHero.jsx` | `location.pathname.split()` instead of `useParams()` |
| 15 | `Products.jsx` | Direct `axios.get()` with hardcoded URL instead of `publicRequest` |
| 16 | `App.jsx` | No error boundary — single component error crashed entire app |

### 5.5 Code Quality Issues Found

| # | Issue |
|---|-------|
| 17 | Login showed generic "Something went wrong..." for all errors |
| 18 | No form validation on Login, SignUp, or Contact |
| 19 | Contact form submit button was `disabled` with no handler |
| 20 | Both CHECKOUT NOW buttons in Cart had no `onClick` |
| 21 | SignUp terms checkbox not bound to state — always submitted regardless |
| 22 | `WomenCart.jsx` faked loading with `setTimeout(1000)` |
| 23 | `service/login.js` was dead code (never imported) |
| 24 | Magic numbers in Cart (`100`, `100000`) with no named constants |

---

## 6. Frontend Fixes

### Fix 1 — Stale token + wrong header

**File:** `service/requestMethods.js`

```js
// BEFORE — token read once at module load, always undefined
const TOKEN = currentUser?.token;
export const userRequest = axios.create({
  headers: { token: `Bearer ${TOKEN}` }
});

// AFTER — interceptor reads from localStorage on every request
export const userRequest = axios.create({ baseURL: BASE_URL });

userRequest.interceptors.request.use((config) => {
  try {
    const persisted = JSON.parse(localStorage.getItem("persist:root") || "{}");
    const token = persisted.user && JSON.parse(persisted.user).currentUser?.token;
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
  } catch { /* proceed unauthenticated */ }
  return config;
});
```

### Fix 2 — Cart total formula

**File:** `component/pages/Cart.jsx`

```js
// BEFORE — wrong operator precedence, wrong sign on shipping fee
{cart.carts[userId].total-(shippingFee+cart.carts[userId].total>100000?cart.carts[userId].total*0.05:0)}

// AFTER — named constants, correct formula
const SHIPPING_FEE = 100;
const DISCOUNT_THRESHOLD = 100000;
const DISCOUNT_RATE = 0.05;

const subtotal = cart.total;
const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
const total = subtotal + SHIPPING_FEE - discount;
```

### Fix 3 — Cart crash for new users

**File:** `component/pages/Cart.jsx`

Replaced all direct `cart.carts[userId]` access with `selectCartItems(state, userId)` which returns a safe `{ products: [], quantity: 0, total: 0 }` fallback. Added an empty-cart UI state so the page renders gracefully when the cart is empty.

### Fix 4 — Unprotected UserProfile route

**File:** `App.jsx`

```jsx
// BEFORE
<Route path='/userprofile' element={<UserProfile/>}></Route>

// AFTER
<Route
  path='/userprofile'
  element={<ProtectedRoute><UserProfile /></ProtectedRoute>}
/>
```

### Fix 5 — API key and hardcoded URL

**File:** `.env`, `service/requestMethods.js`, `Products.jsx`

```
# .env
VITE_API_BASE_URL = "https://royalwatches-backend.onrender.com/api/"
```

```js
// requestMethods.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://...fallback...";
```

### Fix 6 — Error state is now a message string

**File:** `redux/userRedux.js`

```js
// BEFORE
error: false
loginFailure: (state) => { state.error = true; }

// AFTER
error: null
loginFailure: (state, action) => {
  state.error = action.payload || "Login failed. Please try again.";
}
```

**File:** `redux/apiCalls.js`

```js
// AFTER — passes actual server error message
dispatch(loginFailure(err.response?.data?.error || "Something went wrong."));
```

### Fix 7 — Wishlist schema normalized

**File:** `redux/wishlistRedux.js`

Products now stored flat (same shape as cart), not nested under `{ product: {...} }`:

```js
// BEFORE
addProductWishlist: (state, action) => {
  products.push(action.payload)  // { userId, product: { _id, title, ... } }
}
// Access: item.product._id

// AFTER
addProductWishlist: (state, action) => {
  const { userId, ...product } = action.payload
  products.push(product)  // { _id, title, price, ... }
}
// Access: item._id
```

Also added deduplication — adding the same product twice is a no-op.

### Fix 8 — Favorites synced to Redux

**Files:** `component/Hero_Products.jsx`, `component/Single_product.jsx`

Favorite icon state is now derived from Redux wishlist, not local `useState`. The filled heart persists across navigation:

```js
const wishlistIds = new Set(wishlist.products.map((p) => p._id));
const isFavorite = wishlistIds.has(product._id);

// renders FavoriteIcon (filled) vs FavoriteBorderIcon based on Redux state
```

### Fix 9 — Cart deduplication

**File:** `redux/cartRedux.js`

```js
addProduct: (state, action) => {
  const existingIndex = state.carts[userId].products.findIndex(
    (p) => p._id === action.payload._id
  );
  if (existingIndex !== -1) {
    // Already in cart — increment quantity instead of pushing duplicate
    existing.quantity += action.payload.quantity;
    state.carts[userId].total += action.payload.price * action.payload.quantity;
  } else {
    // New product — push
    state.carts[userId].quantity += 1;
    state.carts[userId].products.push(action.payload);
    state.carts[userId].total += action.payload.price * action.payload.quantity;
  }
}
```

### Fix 10 — Code splitting

**File:** `App.jsx`

All 18 pages converted to lazy imports. Build output confirms each page is a separate chunk:

```js
// BEFORE — all 18 pages in one bundle
import Cart from './component/pages/Cart';
import Hero from './component/pages/Hero';
// ...

// AFTER — each page downloaded only when navigated to
const Cart = lazy(() => import('./component/pages/Cart'));
const Hero = lazy(() => import('./component/pages/Hero'));

// Wrapped in Suspense with spinner fallback
<Suspense fallback={<Spinner />}>
  <Routes>...</Routes>
</Suspense>
```

### Fix 11 — `useParams()` replaces `location.pathname.split()`

**Files:** `component/Hero_slider.jsx`, `component/pages/MenHero.jsx`, `component/pages/WomenHero.jsx`

Removed all `const id = location.pathname.split("/")[2]` patterns. These were also incorrectly included in `useEffect` dependency arrays, causing spurious re-fetches.

`MenHero.jsx` was also refactored from 4 duplicated filter loops into a single utility:

```js
const CATEGORIES = ["Luxury", "Classic", "Formal", "Sports"];
const filterByCategory = (products, cat) =>
  products.filter(p => Array.isArray(p.categories) && p.categories.includes(cat));
```

### Fix 12 — Consistent API layer in Products.jsx

**File:** `component/Products.jsx`

```js
// BEFORE — hardcoded URL, direct axios
await axios.get(`https://royalwatches-backend.onrender.com/api/products?category=${cat}`)

// AFTER — uses shared instance with env-based base URL
await publicRequest.get(cat ? `/products?category=${cat}` : "/products")
```

Also added an error state with a Retry button instead of leaving the skeleton loader running forever.

### Fix 13 — Error boundary

**File:** `component/ErrorBoundary.jsx` (new)

A React class component error boundary wraps the entire app in `App.jsx`. Any unhandled render error now shows a recovery screen instead of a blank white page:

```jsx
class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <RecoveryScreen onRefresh={() => window.location.reload()} />;
    }
    return this.props.children;
  }
}
```

### Fix 14 — Login shows actual error message

**File:** `component/pages/Login.jsx`

```jsx
// BEFORE
{error && <div>Something went wrong...</div>}

// AFTER — shows the specific message from the server
{error && <div className="text-red-400 mt-3 text-sm text-center">{error}</div>}
```

### Fix 15 — Form validation

**File:** `component/pages/Login.jsx`

Added `minLength` attributes and `.trim()` on submission.

**File:** `component/pages/SignUp.jsx`

Full validation before dispatch:
- All fields required
- Password minimum 6 characters
- Terms checkbox must be checked
- Error displayed inline

### Fix 16 — Contact form wired up

**File:** `component/pages/Contact.jsx`

Converted to a controlled form with `useState`. Added `handleSubmit` with validation. Shows a success confirmation state after submission. The submit button is no longer `disabled`.

### Fix 17 — Checkout buttons wired up

**File:** `component/pages/Cart.jsx`

Both CHECKOUT NOW buttons now call `handleCheckout`. Displays an alert with a message until a full checkout flow is implemented.

### Fix 18 — SignUp terms checkbox wired up

**File:** `component/pages/SignUp.jsx`

```jsx
const [termsAccepted, setTermsAccepted] = useState(false);
// ...
if (!termsAccepted) {
  setFormError("You must accept the terms & conditions.");
  return;
}
```

### Fix 19 — WomenCart real loading state

**File:** `component/WomenCart.jsx`

Removed `useState(true)` + `setTimeout(1000)`. Now accepts `loading` prop from `WomenHero.jsx` which owns the actual fetch:

```jsx
// WomenHero.jsx
const [loading, setLoading] = useState(true);
// ...
<WomenCart item={womenLuxury} loading={loading} />
```

### Fix 20 — Dead code removed

Deleted `frontend/src/service/login.js` — this file was never imported anywhere.

### Fix 21 — Image field compatibility

All components that render product images now use a fallback pattern to support both the old single-image schema and the new `images` array:

```js
const imgSrc = product.images?.[0] || product.img;
```

---

## 7. Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | Yes | MongoDB Atlas connection string |
| `JWT_SEC` | Yes | JWT signing secret — use a long random string (256-bit) |
| `STRIPE_KEY` | Yes | Stripe secret key from Dashboard |
| `STRIPE_WEBHOOK_SECRET` | Yes | Stripe webhook signing secret — get from Dashboard after registering endpoint |
| `PORT` | No | Server port (default: 3000) |
| `FRONTEND_URL` | Yes (prod) | Frontend origin for CORS whitelist (e.g. `https://royalwatches.com`) |
| `EMAIL_HOST` | Yes | SMTP host (e.g. `smtp.gmail.com`) |
| `EMAIL_PORT` | Yes | SMTP port (`587` for TLS, `465` for SSL) |
| `EMAIL_USER` | Yes | SMTP sender address |
| `EMAIL_PASS` | Yes | SMTP password or app password |

### Frontend (`frontend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_BASE_URL` | Yes | Backend API base URL (e.g. `https://royalwatches-backend.onrender.com/api/`) |
| `VITE_NEWS_NY_API` | No | NY Times API key for blog section |

> **Security note:** Never commit `.env` files to version control. Add `.env` to `.gitignore` and use your hosting platform's environment variable management for production values.

---

## 8. API Reference

### Authentication

| Method | Endpoint | Auth | Body | Description |
|--------|----------|------|------|-------------|
| `POST` | `/api/auth/register` | None | `{ username, email, password }` | Create account |
| `POST` | `/api/auth/login` | None | `{ username, password }` | Login, returns JWT |
| `POST` | `/api/auth/forgot-password` | None | `{ email }` | Send password reset email |
| `POST` | `/api/auth/reset-password/:token` | None | `{ password }` | Reset password using token from email |

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `PUT` | `/api/users/:id` | Own account or Admin | Update username, email, or password |
| `DELETE` | `/api/users/:id` | Own account or Admin | Delete account |
| `GET` | `/api/users/find/:id` | Admin | Get user by ID |
| `GET` | `/api/users/` | Admin | List users (`?page=1&limit=20`) |
| `GET` | `/api/users/stats` | Admin | Monthly registration stats |

### Products

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/products/` | Admin | Create product |
| `PUT` | `/api/products/:id` | Admin | Update product |
| `DELETE` | `/api/products/:id` | Admin | Delete product |
| `GET` | `/api/products/find/:id` | None | Get product by ID |
| `GET` | `/api/products/` | None | List products (`?new=true`, `?category=Men`, `?page=1&limit=20`) |

### Cart

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/carts/` | User | Create cart |
| `PUT` | `/api/carts/:id` | Cart owner or Admin | Update cart products |
| `DELETE` | `/api/carts/:id` | Cart owner or Admin | Delete cart |
| `GET` | `/api/carts/find/:userId` | Own cart or Admin | Get user's cart |
| `GET` | `/api/carts/` | Admin | List all carts |

### Orders

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/orders/` | User | Create order (checks stock) |
| `PUT` | `/api/orders/:id` | Admin | Update order status |
| `DELETE` | `/api/orders/:id` | Admin | Delete order |
| `GET` | `/api/orders/find/:userId` | Own orders or Admin | Get user's orders |
| `GET` | `/api/orders/` | Admin | List all orders (`?page=1&limit=20`) |
| `GET` | `/api/orders/income` | Admin | Monthly income (`?pid=productId`) |
| `GET` | `/api/orders/stats` | Admin | Total order count |

### Payments

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/checkout/payment` | User | Create Stripe charge |
| `POST` | `/api/checkout/webhook` | Stripe signature | Stripe event handler |

**Authentication header format:**
```
Authorization: Bearer <jwt_token>
```

---

## 9. Remaining Work

The following items were identified but not implemented in this session. They represent the next steps toward a fully production-grade application.

### High Priority

| Item | Why |
|------|-----|
| Checkout flow UI | CHECKOUT NOW button currently shows an alert — a real payment + order creation flow is needed |
| Password reset UI | Backend routes are ready; frontend form at `/reset-password/:token` needs building |
| JWT in `httpOnly` cookies | Storing tokens in `localStorage` is vulnerable to XSS. Requires backend session endpoint changes |
| Backend order amount validation | Server should compute total from product IDs + quantities, not trust `amount` from client |

### Medium Priority

| Item | Why |
|------|-----|
| TypeScript migration | Zero compile-time type safety across both apps |
| Test suite | No unit, integration, or e2e tests — no regression safety net |
| Product image upload | Currently stores URLs; needs S3/Cloudinary integration for real uploads |
| Product search API | Full-text search via MongoDB `$text` index or Atlas Search |
| SEO (meta tags, Open Graph) | Every page has the same browser title |
| Admin panel review | `admin/` package was not in scope for this audit |

### Low Priority

| Item | Why |
|------|-----|
| React Query or SWR | Replace manual `useEffect` + `useState` API calls with caching and retry |
| Coupon/discount codes | Standard feature for retail |
| Product reviews | Social proof for watch purchases |
| Analytics integration | No visibility into traffic or conversion |
| CI/CD pipeline | No automated build, test, or deploy |

---

*Generated June 2026 — RoyalWatches Engineering*
