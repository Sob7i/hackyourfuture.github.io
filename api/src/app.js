const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    Apply,
    ContactUs,
    SubmitCV,
    SubmitAssignment,
} = require('./middlewares');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('--- Debug request ---');
    console.log(req);
    console.log('--- End Debug request ---');
    next();
});

app.post('/contact-us', (req, res) => ContactUs(req, res));
app.post('/apply', (req, res) => Apply(req, res));
app.put('/cv', (req, res) => SubmitCV(req, res));
app.put('/assignment', (req, res) => SubmitAssignment(req, res));

module.exports = app;
