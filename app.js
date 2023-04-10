const express = require('express')
const path = require('path');
var cors = require('cors')
const PortfolioRouter = require('./routes/portfolio');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Enable all cors requests
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use('/api', PortfolioRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})