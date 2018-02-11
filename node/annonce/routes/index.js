var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {});
});


/* GET place ad page. */
router.get('/placeAd', function (req, res, next) {
    res.render('placeAd', {});
});

/* POST the data of the ad */
router.post('/addAd', function (req, res) {
    // Set our internal DB variable
    var db = req.db;
    db.addAd (req.body, function (err, next) {
      if (err) {
        res.send('error');
      }
      else {
        res.redirect('index');
      }
    });
});

module.exports = router;
