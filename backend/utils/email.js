const nodemailer = require('nodemailer')
const config = require('./config')

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: Number(config.EMAIL_PORT) || 587,
  secure: Number(config.EMAIL_PORT) === 465,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
})

const sendOrderConfirmation = async (toEmail, order) => {
  const productRows = order.products
    .map(p => `<tr><td style="padding:8px;border:1px solid #ddd">${p.productId}</td><td style="padding:8px;border:1px solid #ddd;text-align:center">${p.quantity}</td></tr>`)
    .join('')

  await transporter.sendMail({
    from: `"RoyalWatches" <${config.EMAIL_USER}>`,
    to: toEmail,
    subject: `Order Confirmed — #${order._id}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1a1a1a">Thank you for your order!</h2>
        <p>Order ID: <strong>${order._id}</strong></p>
        <table style="width:100%;border-collapse:collapse;margin:16px 0">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:8px;border:1px solid #ddd;text-align:left">Product ID</th>
              <th style="padding:8px;border:1px solid #ddd;text-align:center">Qty</th>
            </tr>
          </thead>
          <tbody>${productRows}</tbody>
        </table>
        <p><strong>Total: $${(order.amount / 100).toFixed(2)}</strong></p>
        <p style="color:#555">We'll notify you once your order ships.</p>
      </div>
    `,
  })
}

const sendShippingNotification = async (toEmail, order) => {
  await transporter.sendMail({
    from: `"RoyalWatches" <${config.EMAIL_USER}>`,
    to: toEmail,
    subject: `Your order #${order._id} has shipped!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1a1a1a">Your watch is on its way!</h2>
        <p>Order ID: <strong>${order._id}</strong></p>
        <p>Your order has been dispatched and is heading to you.</p>
        <p style="color:#555">Questions? Reply to this email and we'll help you out.</p>
      </div>
    `,
  })
}

const sendPasswordReset = async (toEmail, resetURL) => {
  await transporter.sendMail({
    from: `"RoyalWatches" <${config.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Password Reset Request — RoyalWatches',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1a1a1a">Reset Your Password</h2>
        <p>You requested a password reset. Click below to set a new password.</p>
        <p style="color:#e53e3e"><strong>This link expires in 1 hour.</strong></p>
        <a href="${resetURL}"
           style="display:inline-block;background:#1a1a1a;color:#fff;padding:12px 28px;
                  text-decoration:none;border-radius:4px;margin:16px 0;font-size:15px">
          Reset Password
        </a>
        <p style="color:#888;font-size:13px">
          If you didn't request this, you can safely ignore this email.
          Your password won't change until you click the link above.
        </p>
      </div>
    `,
  })
}

module.exports = { sendOrderConfirmation, sendShippingNotification, sendPasswordReset }
