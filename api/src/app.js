const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const Apply = require('./apply')
const app = express()

app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use( (req, res, next) => {
    console.log('--- Debug request ---');
    console.log(req);
    console.log('--- End Debug request ---');
    next();
})

app.post('/apply', (req, res) => Apply(req, res));

module.exports = app;
