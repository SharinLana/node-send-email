const nodemailer = require("nodemailer");

const sendEmai = async (req, res, next) => {
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
//   Also, check the result in Ethereal.email by clicking "Open Mailbox" button
};

module.exports = sendEmai;
