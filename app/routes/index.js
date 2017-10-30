const express = require('express')
const index   = express.Router()

let info = require('./../utils/info.json')

index.get('/', (req, res, next) => {
  res.render('index', { 
    info,
    title: 'Cd-Easy - Inicio'
  })
})

index.get('/sobre', (req, res, next) => {
  res.render('about', { 
    info,
    title: 'Cd-Easy - Sobre nós'
  })
})

module.exports = {index}