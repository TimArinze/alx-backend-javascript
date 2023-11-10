const express = require('express')

const app = express()
app.use(express.json())

// Require the routes defined in the routes/index.js
const routes = require('./routes/index')

const port = process.env.PORT || 1245;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app;