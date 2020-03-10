const nodemailer = require("nodemailer");

const sendMail = email => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "paladinistormentor@gmail.com",
      pass: process.env.GMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: "paladinistormentor@gmail.com",
    to: email,
    subject: "Thank you for signing up on Invoice Manager created by Dilip",
    text:
      "Thank you for signing up, you can now manage your warranty documents for your home appliances very easily"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendMail;
