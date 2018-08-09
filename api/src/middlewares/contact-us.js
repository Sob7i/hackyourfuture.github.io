const template = require('lodash.template');
const applyToOrgTemplate = template(require('../../emails_template/contact_us.tpl'));
const sendEmail = require('../sendEmail');

const toEmail = "info@hackyourfuture.net";

module.exports = (req, res) => {

    sendEmail(
        req.body.email,
        [toEmail],
        applyToOrgTemplate({ params: req.body }),
        'New contact request'
    ).then(() => {
        console.log("=== ALL EMAILS ARE SENT!!!");
        res.json({ message: 'You got an email :-)'});
    }).catch(err => {
        console.log("===EMAIL NOT SENT===");
        console.log(err);
        res.setState(500).json({ message: 'Something went wrong' });
    });

};
