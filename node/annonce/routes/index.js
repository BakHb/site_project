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
    db.addAd (req, res, function (_err, _req, _res) {
      if (_err) {
        _res.send('error');
      }
      else {
        _res.send ('index');
      }
    });
});

module.exports = router;
