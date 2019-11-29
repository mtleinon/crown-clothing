const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); //TODO
  console.debug('production set * route to return React app');
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', (req, res) => {
  console.debug('req =');
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
  console.debug('body =', body);
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    console.debug('stripeRes =', stripeRes);
    // console.debug('stripeErr =', stripeErr);
    if (stripeErr) {
      res.status(500).send({ error: 'Server internal error' });
      console.error('Error from Stripe server =', stripeErr.message);
    } else {
      console.debug('Stripe success stripeRes.receipt_url =', stripeRes.receipt_url);
      res.status(200).send({
        success: "Payment succeeded: receipt: " + stripeRes.receipt_url
      });
    }
  })
})

app.listen(port, error => {
  if (error) throw error;
  console.debug('Server running in port =', port);
})
