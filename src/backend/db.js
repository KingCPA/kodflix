let MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("kodflix");
            resolve(dbo);
          }); 
    });
}




module.exports = connect;
