const tumblr = require('tumblr.js');
const tumblr_consume_key = process.env.TUMBLR_CONSUMER_KEY;
const client = tumblr.createClient(
  { consumer_key: tumblr_consume_key }
);

const register = (app) => {
  app.get('/random', (request, response) => {
    const blogs = [
      'shibalovers.tumblr.com',
      'shibasommelier.tumblr.com',
      'mensweardog.tumblr.com'
    ];
    client.blogPosts(
      blogs.random(),
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
}

exports.register = register;