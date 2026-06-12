const stripeRouter = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { verifyToken } = require("./verifyToken");
const Order = require("../models/order");
const config = require("../utils/config");
const logger = require("../utils/logger");

stripeRouter.post("/payment", verifyToken, async (req, res, next) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      // orderId in metadata lets the webhook link this charge back to an order
      metadata: req.body.orderId ? { orderId: req.body.orderId } : {},
    });
    res.status(200).json(charge);
  } catch (err) {
    next(err);
  }
});

// Exported separately and mounted in app.js before express.json() so it receives the
// raw request body required for Stripe webhook signature verification
const handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, config.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    logger.error('Stripe webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  try {
    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;
      const orderId = charge.metadata && charge.metadata.orderId;
      if (orderId) {
        await Order.findByIdAndUpdate(orderId, {
          $set: { status: 'processing', paymentId: charge.id },
        });
        logger.info(`Order ${orderId} confirmed via Stripe webhook`);
      }
    }
  } catch (err) {
    logger.error('Webhook handler error:', err.message);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }

  res.status(200).json({ received: true });
};

module.exports = stripeRouter;
module.exports.handleStripeWebhook = handleStripeWebhook;
