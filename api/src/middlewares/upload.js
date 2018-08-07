const express = require('express');
const multer = require('multer');
const app = express();
const {
    updateApplicant
} = require("../data");
const {
    sendEmail
} = require("../sendEmail");


module.exports = (req, res) => {
    const {
        email,
        assignmentLink
    } = req.body;

    updateApplicant(email, assignmentLink, req.files).then(() => {
        res.send({
            message: 'you got an email :-)'
        });
    }).catch(() => {
        res.status(500).send({
            message: 'Something went wrong'
        });
    })
}
