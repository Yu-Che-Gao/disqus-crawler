const express = require('express');
const app = express();
const request = require('request');

const disqusPublicKey = 'o25Rq85nLUWhQ034GnQ8ny8ENNRPi74msQ0TCpBHZbVohG7PBP41vJEQp5sRyAJ9';
const disqusSecretKey = 'ItYRkmy3RpxvhPESeSbKW4u4SRZp9iesVnNd2Mq2WlRCIvu3tiRmj0EkVZZxcFMf';
const disqusForum = 'renthouserobot';
const disqusForumAddress = 'https://disqus.com/api/3.0/forums';
const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  request(disqusForumAddress + '/listThreads.json?forum=' + disqusForum + '&api_key=' + disqusPublicKey, function (error, response, body) {
    res.send(body);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});