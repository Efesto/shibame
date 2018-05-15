require('dotenv').load();
const tumblr = require('tumblr.js');
const tumblr_consume_key = process.env.TUMBLR_CONSUMER_KEY;
const client = tumblr.createClient(
  { consumer_key: tumblr_consume_key }
);

const getPosts = new Promise(((resolve, reject) => {
  const blogs = [
    'shibalovers.tumblr.com',
    'shibasommelier.tumblr.com',
    'mensweardog.tumblr.com'
  ];

  client.blogPosts(
    blogs.random(),
    { type: 'photo', limit: 500 },
    (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    }
  );
}));

const register = (app) => {
  app.get('/random', (request, response) => {
    getPosts.then(data => {
      const post = data.posts.random();
      const shiba = post.photos.random();
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.json(
        {
          shiba: shiba.alt_sizes[0].url
        }
      );
    }).catch(() => {
      response.json({
        error: 'No doggos here'
      })
    });
  })

  app.get('/many', (request, response) => {
    getPosts.then(data => {
      const posts = data.posts;
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.json(
        {
          shibas: posts.map(s => {
            return s.photos.random().alt_sizes[0].url
          })
        }
      );
    }).catch(() => {
      response.json({
        error: 'No doggos here'
      })
    });
  })
}

exports.register = register;