const nodemailer = require('nodemailer')
const config     = require('../config/app')

let transporter = nodemailer.createTransport(options[defaults])
    
let smtpConfig = {
    host  : 'smtp.example.com',
    port  : 587,
    secure: true,
    auth  : {
        user: config.mail.email,
        pass: config.mail.password
    }
}