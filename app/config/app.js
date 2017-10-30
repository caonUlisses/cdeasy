require('dotenv').config()

module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost:27017'
    },
    app: {
        name: process.env.APP_NAME || 'Cd-Easy'
    },
    mail: {
        email   : process.env.EMAIL_ACCOUNT  || 'test@test.com',
        password: process.env.EMAIL_PASSWORD || '123456'
    }
}