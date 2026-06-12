const bcrypt = require('bcrypt')
const crypto = require('crypto')
const authRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const rateLimit = require('express-rate-limit')
const { sendPasswordReset } = require('../utils/email')
const config = require('../utils/config')

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Too many login attempts, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
})

const resetLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many password reset requests, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
})

authRouter.post('/register', async (request, response) => {
  const { username, email, password } = request.body

  if (!username || !email || !password) {
    return response.status(400).json({ error: 'username, email, and password are required' })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({ username, email, passwordHash })
  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

authRouter.post('/login', loginLimiter, async (request, response) => {
  const { username, password } = request.body

  if (!username || !password) {
    return response.status(400).json({ error: 'username and password are required' })
  }

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'invalid username or password' })
  }

  const userForToken = { id: user._id, isAdmin: user.isAdmin }
  const token = jwt.sign(userForToken, process.env.JWT_SEC, { expiresIn: 60 * 60 })

  response.status(200).send({ token, username: user.username, name: user.name, isAdmin: user.isAdmin, id: user._id })
})

authRouter.post('/forgot-password', resetLimiter, async (request, response) => {
  const { email } = request.body

  if (!email) {
    return response.status(400).json({ error: 'email is required' })
  }

  const user = await User.findOne({ email })

  // Always return 200 to prevent email enumeration attacks
  if (!user) {
    return response.status(200).json({ message: 'If that email exists, a reset link has been sent.' })
  }

  const rawToken = crypto.randomBytes(32).toString('hex')
  const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex')

  user.passwordResetToken = hashedToken
  user.passwordResetExpires = Date.now() + 60 * 60 * 1000
  await user.save()

  const resetURL = `${config.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${rawToken}`

  try {
    await sendPasswordReset(user.email, resetURL)
    response.status(200).json({ message: 'If that email exists, a reset link has been sent.' })
  } catch {
    // Clean up token so user can retry
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()
    response.status(500).json({ error: 'Failed to send reset email. Please try again.' })
  }
})

authRouter.post('/reset-password/:token', async (request, response) => {
  const { password } = request.body

  if (!password) {
    return response.status(400).json({ error: 'password is required' })
  }

  const hashedToken = crypto.createHash('sha256').update(request.params.token).digest('hex')

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  })

  if (!user) {
    return response.status(400).json({ error: 'Token is invalid or has expired' })
  }

  user.passwordHash = await bcrypt.hash(password, 10)
  user.passwordResetToken = undefined
  user.passwordResetExpires = undefined
  await user.save()

  response.status(200).json({ message: 'Password has been reset successfully.' })
})

module.exports = authRouter
