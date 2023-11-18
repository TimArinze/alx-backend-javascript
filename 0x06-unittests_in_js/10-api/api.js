const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 7865;

app.use(bodyParser.json()); //Use the JSON parser middleware

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).json({error: `${id} not a number`})
  } else {
    return res.send(`Payment methods for cart ${id}`)
  }
})

app.get('/available_payments', (req, res) => {
  return res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.post('/login', (req, res) => {
  const { userName } = req.body;
  return res.send(`Welcome ${userName}`)
})

app.listen(port, () => {
    console.log(`API available on localhost port 7865`)
});

module.exports = app;