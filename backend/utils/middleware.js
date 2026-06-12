const logger = require('./logger')

const SENSITIVE_FIELDS = ['password', 'passwordHash', 'token', 'secret']

const sanitizeBody = (body) => {
  if (!body || typeof body !== 'object') return body
  const sanitized = { ...body }
  SENSITIVE_FIELDS.forEach(field => {
    if (field in sanitized) sanitized[field] = '[REDACTED]'
  })
  return sanitized
}

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', sanitizeBody(request.body))
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return response.status(400).json({ error: 'duplicate field value' })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' })
  }

  return response.status(500).json({ error: 'internal server error' })
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
