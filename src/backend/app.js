const express = require('express');
const app = express();
const connect = require('./db')
const port = process.env.PORT || 3001;
var path = require("path");


connect().then((dbo) => {
    
    app.get('/rest/shows', (req, res) => {
        dbo.collection("shows").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });

    app.use(express.static(path.join(__dirname, '../../build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    })
})


app.listen(port, () => console.log('Example app listening on port 3001!'));