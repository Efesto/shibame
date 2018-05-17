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

exports.getPosts = getPosts;