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

app.get('/random', (request, response) => {
  client.blogPosts(
    'shibalovers.tumblr.com',
    { type: 'photo', limit: 100 },
    (err, data) => {
      const photos = data.posts[0].photos
      const shiba = photos[Math.floor(Math.random() * photos.length)];
      response.json(
        {
          shiba: shiba.original_size.url
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