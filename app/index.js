const express = require('express');
const tumblr = require('tumblr.js');
require('./keep_awake');

const app = express();
const port = process.env.PORT || 3000;
const tumblr_consume_key = process.env.TUMBLR_CONSUMER_KEY
var client = tumblr.createClient(
  { consumer_key: tumblr_consume_key }
);

app.get('/', (request, response) => {
  response.send('Woof!');
});

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

app.get('/random', (request, response) => {
  client.blogPosts(
    'shibalovers.tumblr.com',
    { type: 'photo', limit: 500 },
    (err, data) => {
      const post = data.posts.random();
      const shiba = post.photos.random();
      response.json(
        {
          shiba: shiba.alt_sizes[0].url
        }
      );
    });
})

app.listen(port, (err) => {
  if (err) {
    return console.log('[ERROR] ', err)
  }

  console.log(`server is listening on ${port}`)
})