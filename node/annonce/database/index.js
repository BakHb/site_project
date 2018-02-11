var mongo = require('mongodb');
var monk = require('monk');

var customForeach = function(array, asyncFunction, callback) {
  var itemProcessed = 0;
  array.foreach(function (item, index, a) {
    asyncFunction (item, function () {
      itemsProcessed++;
      if(itemsProcessed == a.length) {
        callback();
      }
    });
  });
};

function DB (dbUrl, usersDb, userJsonKeys, adsDb, adsJsonKeys) {
  this.dbUrl = dbUrl;
  this.usersDb = usersDb;
  this.userJsonKeys = userJsonKeys;
  this.adsDb = adsDb;
  this.adsJsonKeys = adsJsonKeys;
}

DB.prototype.addUser = function (req, res, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err, req, res);
  }
  else {
    var insertObject = {};
    customForeach (userJsonKeys, function (item, next) {
      insertObject[item] = req.body[item];
    }, function () {
      db.get(usersDb).insert(insertObject, function (err, doc) {
        if (err) {
          next(err, req, res);
        }
        else {
          next(null, req, res);
        }
        db.close();
      });
    });
  }
}

DB.prototype.addAd = function (req, res, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err, req, res);
  }
  else {
    var insertObject = {};
    customForeach (adsJsonKeys, function (item, next) {
      insertObject[item] = req.body[item];
    }, function () {
      db.get(adsDb).insert(insertObject, function (err, doc) {
        if (err) {
          next(err, req, res);
        }
        else {
          next(null, req, res);
        }
        db.close();
      });
    });
  }
}


// TODO : when the user want to modify an ad we have to get it
DB.prototype.getAd = function (req, res, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err, req, res);
  }
  else {
    db.close();
  }
}

DB.prototype.getAllAds = function (req, res, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err, req, res);
  }
  else {
    db.collection('adsDb').find({}).toArray(function (err, result) {
      if (err) {
        next (err, req, res, result);
      }
      else {
        next (null, req, res, result);
        db.close();
      }
    });
  }
}

module.exports = DB;
