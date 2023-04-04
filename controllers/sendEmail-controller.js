const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmaiEthereal = async (req, res, next) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "verdie.dach28@ethereal.email",
      pass: "97gGcmvNFQeZPyQhRD",
    },
  });

  let info = await transporter.sendMail({
    from: '"Show Me Show" <showmeshow@showmeshow.org>',
    to: "sophia@gmail.com",
    subject: "Greeting email",
    html: "<h2>Sending our email</h2>",
  });

  res.json(info);
  // Then click the Send link in the browser and view the received data on the /send route
  // Also, check the result in Ethereal.email by clicking "Open Mailbox" button
};

const sendEmail = async (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "lanasthoughts@gmail.com", // Recepient's email
    from: "lana.sharin.webdev@gmail.com", // Must be the same as you used in SendGrid when creating identity
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const info = await sgMail.send(msg);

  res.json(info);
  // Then send the email via the browser. Check the "info" result at http://localhost:3000/send
  // And make sure the lanasthoughts@gmail.com received the email
};

module.exports = sendEmail;
