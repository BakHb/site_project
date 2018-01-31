var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET place ad page. */
router.get('/placeAd', function(req, res, next) {
  res.render('placeAd', {});
});

/* POST the data of the ad */
router.post('/addAd', function(req, res) {
  // Set our internal DB variable
  var db = req.db;
  
  // Get our form values. These rely on the name attributes
  // Change the values of the form
  var userName = req.body.userName
  var adTitle = req.body.adTitle
  var img = req.body.img
  
  // TODO : Change the db name 
  var collection = db.get('annonce');
  collection.insert({ 
	"userName" : userName,
	"adTitle" : adTitle,
	"img" : img,
  }, function (err, doc) {
  	if (err) {
		res.send("error");
	}
	else {
		res.redirect("placeAd");
	}
  }); 
}); 

module.exports = router;
