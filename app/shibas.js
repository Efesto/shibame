require('dotenv').load();
require('./array');
const getPosts = require('./shiba_blogs').getPosts;

const register = (app) => {
  app.get('/random', random);
  app.get('/many', many);
}

const many = (request, response) => {
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
};

const random = (request, response) => {
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
};

exports.register = register;
exports.random = random;
exports.many = many;