require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const FRONTEND_URL = process.env.FRONTEND_URL

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET

module.exports = {
  MONGODB_URI,
  PORT,
  FRONTEND_URL,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  STRIPE_WEBHOOK_SECRET,
}
