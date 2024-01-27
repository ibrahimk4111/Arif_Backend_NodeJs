"use strict";
const nodemailer = require("nodemailer");
const config = require("../config/config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: config.smtpMail,
    pass: config.smtpPassword,
  },
});

const emailWithNodeMailer = async ( emailData ) => {
  const mailInfo = await transporter.sendMail({
    from: config.smtpMail, // sender address
    to: emailData.email, // list of receivers
    subject: emailData.subject, // Subject line
    html:  emailData.html, // html body
  });

  return mailInfo
};

module.exports = emailWithNodeMailer;
