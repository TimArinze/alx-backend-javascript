const express = require('express');

const app = express();
const port = 7865;

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

app.listen(port, () => {
    console.log(`API available on localhost port 7865`)
});

module.exports = app;