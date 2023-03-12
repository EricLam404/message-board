var express = require('express');
var router = express.Router();

const messages = [];

router.get('/', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard" });
});

router.post('/', (req, res, next) => {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect('/')
});

module.exports = router;
