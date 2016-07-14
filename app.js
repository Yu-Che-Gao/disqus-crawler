const express = require('express');
const app = express();
const request = require('request');

const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  request('https://disqus.com/api/3.0/forums/listThreads.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});