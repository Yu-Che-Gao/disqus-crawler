const disqusPublicKey = 'o25Rq85nLUWhQ034GnQ8ny8ENNRPi74msQ0TCpBHZbVohG7PBP41vJEQp5sRyAJ9';
const disqusSecretKey = 'ItYRkmy3RpxvhPESeSbKW4u4SRZp9iesVnNd2Mq2WlRCIvu3tiRmj0EkVZZxcFMf';
const disqusForum = 'renthouserobot';
const disqusForumAddress = 'https://disqus.com/api/3.0/forums';
const port = process.env.PORT || 80;

const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('you have no right to access this page.');
});

app.post('/listThreads', function (req, res) {
  let urlArray = JSON.parse(req.body.urlJSON);
  let requestURL = disqusForumAddress + '/listThreads.json?forum=' + disqusForum + '&api_key=' + disqusPublicKey;
  for (let i = 0; i < urlArray.length; i++) {
    requestURL += '&thread:link=' + urlArray[i].link;
  }

  res.send(requestURL);
  // request(requestURL, function (error, response, body) {
  //   res.send(body);
  // });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});