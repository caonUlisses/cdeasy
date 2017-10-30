const path         = require('path')
const logger       = require('morgan')
const express      = require('express')
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const favicon      = require('serve-favicon')

const {index} = require('./routes/index')

let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)

app.use((req, res, next) => {
  let err        = new Error('Not Found')
      err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error   = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = {app}