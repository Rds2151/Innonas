var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: null});
});

router.post('/filter', (req, res) => {
  data = {
    location : req.body.location,
    source: req.body.source,
    destination: req.body.destination,
    neighbour: req.body.neighbour
  };

  res.render('index', {data: data})
})

module.exports = router;
