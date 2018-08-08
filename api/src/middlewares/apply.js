const template = require('lodash.template');
const applyToStudentMessage = require('../../emails_template/apply_to_student.txt');
const applyToOrgTemplate = template(require('../../emails_template/apply_to_org.tpl'));
const appendData = require("../authentication/appendData");
const authentication = require("../authentication/authentication")
const sendEmail = require('../sendEmail');

const fromEmail = "info@hackyourfuture.net";

module.exports = (req, res) => {

    authentication.authenticate().then(auth => appendData(req, auth))
    .then(()=>{

        return sendEmail(
            fromEmail,
            [fromEmail],
            applyToOrgTemplate({ params: req.body }),
            'A new student applied'
        )

    })
    .then(() => {

        return sendEmail(
            fromEmail,
            [req.body.email],
            applyToStudentMessage,
            'Thank you for applying'
        );

    })
    .then(() => {

        console.log("=== ALL EMAILS ARE SENT!!!");
        res.status(200).json({ message: 'You got an email :-)' });

    })
    .catch((err) => {

        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });

    });

};
