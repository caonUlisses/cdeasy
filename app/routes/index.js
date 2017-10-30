const config  = require('./../config/app')
const express = require('express')
const index   = express.Router()

let info      = require('./../utils/info')
let year      = new Date().getFullYear()
let courses   = require('./../utils/courses.json')
let app_name  = config.app.name

index.get('/', (req, res, next) => {
  res.render('index', { 
    info,
    year,
    app_name,
    courses,
    title: 'Cd-Easy - Inicio'
  })
})

index.get('/sobre', (req, res, next) => {
  res.render('about', { 
    year,
    info,
    app_name,
    title: 'Cd-Easy - Sobre nós'
  })
})

module.exports = {index}