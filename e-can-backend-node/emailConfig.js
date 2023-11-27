// Send Email

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ecan.gestion@outlook.com',
      pass: '3Can.educacion2023%',
  
    },
    secureConnection: true,
    tls: {
      ciphers: 'SSLv3',
    },
  });

  module.exports = transporter;