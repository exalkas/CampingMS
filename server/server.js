const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

//Utils
//const {sendEmail} = require('./utils/mail/mailer');



// //transporter object
// const smtpTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//      user: 'roviescamping@gmail.com',
//      pass: 'CampLop9098'
//  }
// });

// const mail = {
//   from: 'roviescamping@gmail.com', // sender address
//   to: 'alkas@alkas.gr', // list of receivers
//   subject: 'Subject of your email', // Subject line
//   html: '<p>Your html here</p>'// plain text body
// };


// transporter.sendMail(mail, function (err, info) {
//   if(err)
//     console.log(err)
//   else
//     console.log(info);
//     smtpTransporter.close();
// });

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
