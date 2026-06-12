const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const authRouter = require('./controllers/auth')
const usersRouter = require('./controllers/users')
const productRouter = require('./controllers/product')
const cartRouter = require('./controllers/cart')
const orderRouter = require('./controllers/order')
const stripeRoute = require('./controllers/stripe')
const { handleStripeWebhook } = require('./controllers/stripe')

const url = config.MONGODB_URI

logger.info('connecting to db')

mongoose.connect(url)
  .then(() => logger.info('connected to MongoDB'))
  .catch(error => logger.error('error connecting to MongoDB:', error.message))

const allowedOrigins = config.FRONTEND_URL
  ? [config.FRONTEND_URL]
  : ['http://localhost:3000', 'http://localhost:3001']

// Stripe webhook must be mounted before express.json() — Stripe signature verification
// requires the raw request body, which express.json() would replace with a parsed object
app.post('/api/checkout/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook)

app.use(helmet())
app.use(cors({ origin: allowedOrigins, credentials: true }))
app.use(express.json({ limit: '10kb' }))
app.use(middleware.requestLogger)

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/checkout', stripeRoute)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
