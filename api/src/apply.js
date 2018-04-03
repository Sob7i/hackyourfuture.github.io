const aws = require('aws-sdk');
const template = require('lodash.template');
const applyToStudentMessage = require('./../emails_template/apply_to_student.txt');
const applyToOrgTemplate = template(require('./../emails_template/apply_to_org.tpl'));

const fromEmail = "info@hackyourfuture.net";

const ses = new aws.SES({
    region: 'eu-west-1'
});

module.exports = (req, res) => {
    const reject = (err) => {
        console.log("===EMAIL NOT SENT===");
        console.log(err);
        res.setState(500).json({ message: 'Somenthing went wrong' });
    };
    const resolve = () => {
        console.log("=== ALL EMAILS ARE SENT!!!");
        res.json({ message: 'You got an email :-)'});
    }
    ses.sendEmail({
        Destination: {
            ToAddresses: [fromEmail]
        },
        Message: {
            Body: {
                Text: {
                    Data: applyToOrgTemplate({ params: req.body })
                }
            },
            Subject: {
                Data: "Thank you to have apply!"
            }
        },
        Source: "mauro.mandracchia@gmail.com"
    }, (err, data) => {
        if(err) return reject(err);
        return resolve(data);
    })
    ses.sendEmail({
        Destination: {
            ToAddresses: [req.body.email]
        },
        Message: {
            Body: {
                Text: {
                    Data: applyToStudentMessage
                }
            },
            Subject: {
                Data: "Thank you to have apply!"
            }
        },
        Source: "mauro.mandracchia@gmail.com"
    }, (err, data) => {
        if(err) return reject(err);
        return resolve(data);
    })

};
