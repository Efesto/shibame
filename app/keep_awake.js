const http = require('http');
const url = process.env.HEROKU_APP_URL;

console.log(`keep awake started on ${url}`);
setInterval(function() {
  http.get(url);
}, 300000);