let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url =process.env[`DB_URL_${process.env.NODE_ENV}`];

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
