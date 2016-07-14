const express = require('express');
const app = express();
const request = require('request');

const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  request('https://disqus.com/api/3.0/forums/listThreads.json?forum=renthouserobot', function (error, response, body) {
    res.send(body);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});