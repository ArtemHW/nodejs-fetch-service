const express = require('express')
const path = require('path');
const cors = require('cors')
const morgan = require('morgan')
const HelloWorldRouter = require('./routes/hello');
const FlagUkr = require('./routes/flag_ukr');
const ModifyTestVar = require('./routes/modify_test_var.js');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Enable all cors requests
app.use(cors())

app.use(express.json());

// Use Morgan for HTTP request logging (choose your desired format)
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use('/api', HelloWorldRouter);
app.use('/api', FlagUkr);
app.use('/api', ModifyTestVar);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})