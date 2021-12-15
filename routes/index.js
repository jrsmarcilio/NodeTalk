var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/users', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
