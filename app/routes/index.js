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
    title: 'Inicio'
  })
})

index.get('/sobre', (req, res, next) => {
  res.render('about', { 
    year,
    info,
    app_name,
    title: 'Sobre nós'
  })
})

index.get('/cursos', (req, res, next) => {
  res.render('courses_view', {
    year,
    info,
    app_name,
    courses,
    title: 'Nossos cursos'
  })
})

module.exports = {index}