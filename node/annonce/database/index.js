var mongo = require('mongodb');
var monk = require('monk');

var customForeach = function(array, asyncFunction, callback) {
  var itemsProcessed = 0;
  array.forEach(function (item, index, a) {
    asyncFunction (item, function () {
      itemsProcessed++;
      if(itemsProcessed == a.length) {
        callback();
      }
    });
  });
};

function DB (dbUrl, usersDb, adsDb) {
  this.dbUrl = dbUrl;
  this.usersDb = usersDb;
  this.adsDb = adsDb;
}


// TODO :
DB.prototype.addUser = function (body, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err);
  }
  else {
    db.get(this.usersDb).insert(insertObject, function (err, doc) {
      next(err);
      db.close();
    });
  }
}

DB.prototype.addAd = function (body, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err);
  }
  else {
    var collection = db.get(this.adsDb)
    collection.insert(body, function (err, doc) {
      next(err);
      db.close();
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
    next(null, req, res);
    db.close();
  }
}


// TODO :
DB.prototype.getAllAds = function (req, res, next) {
  var db = monk(this.dbUrl);
  if (!db) {
    var err = new Error('Not connected');
    err.status = 406;
    next(err, req, res);
  }
  else {
    db.collection(this.adsDb).find({}).toArray(function (err, result) {
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
