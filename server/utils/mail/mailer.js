const mailer = require('nodemailer');
//require('dotenv').config();

const getEmailData= (to, name, token, template) => {

    let data=null;

    switch(template) {
        case "Welcome":

        data= {
            from: process.env.OWNER_EMAIL, // sender address
            to: 'alkas@alkas.gr', // list of receivers
            subject: `Welcome to Camping Rovies`, // Subject line
            html: '<p>Hello guys! Have a nice time</p>'// plain text body
        }

        break;
        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, token, type) => {
    const smtpTransporter = mailer.createTransport({
        service: 'Gmail',
        auth: {
           user: process.env.MAILER_EMAIL,
           pass: process.env.EMAIL_PASS
       }
      });


      const mail=getEmailData(to, name, token, type);

      smtpTransporter.sendMail(mail, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log('email sent');
          smtpTransporter.close();
      });
}

module.exports= {sendEmail}