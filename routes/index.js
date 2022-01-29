var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/Computer', function(req, res, next) {
  res.render('computer');
});
router.get('/civil', function(req, res, next) {
  res.render('civil');
});
router.get('/ec', function(req, res, next) {
  res.render('ec');
});
router.get('/mech', function(req, res, next) {
  res.render('mech');
});
router.get('/eee', function(req, res, next) {
  res.render('eee');
});
router.get('/genaral', function(req, res, next) {
  res.render('genaral');
});

module.exports = router;
