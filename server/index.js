const express = require('express');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dotenv = require('dotenv');
dotenv.config();

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const params = {
  q: '#mars',
  count: 40,
  result_type: 'recent'
};
app.get('/tweets', (req, res) => {

  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.send(tweets);
    }

    return res.send(error);
  });
});

app.listen(5000);