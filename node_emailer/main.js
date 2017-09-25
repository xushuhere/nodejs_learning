var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xushuhere@gmail.com',
    pass: '226361Nt!'
  }
});

var mailOptions = {
  from: 'xushuhere@gmail.com',
  to: 'xushuhere@yahoo.com, xushu.here@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

