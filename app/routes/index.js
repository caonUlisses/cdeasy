const express = require('express');
const index   = express.Router();

index.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = index;
