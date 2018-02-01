var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


/* GET place ad page. */
router.get('/placeAd', function (req, res, next) {
    res.render('placeAd', {});
});

/* POST the data of the ad */
router.post('/addAd', function (req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the name attributes
    // Change the values of the form
    var titre_annonce = req.body.titre_annonce
    var prix = req.body.prix
    var vendeur = req.body.vendeur
    var tel = req.body.tel
    var model = req.body.model
    var annee_sortie = req.body.annee_sortie
    var vitesse = req.body.vitesse
    var AA = req.body.AA
    var kmetrage = req.body.kmetrage
    var img1 = req.body.img1
    var img2 = req.body.img2
    var img3 = req.body.img3
    var infoSup = req.body.infoSup
    

    // TODO : Change the db name 
    var collection = db.get('annonce');
    collection.insert({
        "titre_annonce": titre_annonce,
        "prix": prix,
        "vendeur": vendeur,
        "tel": tel,
        "model": model,
        "annee_sortie": annee_sortie,
        "vitesse": vitesse,
        "AA": AA,
        "kmetrage": kmetrage,
        "img1": img1,
        "img2": img2,
        "img3": img3,
        "infoSup": infoSup,
    }, function (err, doc) {
        if (err) {
            res.send("error");
        } else {
            res.redirect("placeAd");
        }
    });
});

module.exports = router;
