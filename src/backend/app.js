const express = require('express');
const app = express();
let shows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(shows));

app.listen(3001, () => console.log('Example app listening on port 3001!'));