const fetch = require('node-fetch');
const cheerio = require('cheerio');

const register = app => {
  app.get('/maximillian', (request, response) => {
    fetch('https://www.maximilians-berlin.de/angebote/quicklunch.html')
      .then(res => res.text())
      .then(body => response.send(extractMenu(body)));
  }) 
}

const extractMenu = body => {
  const $ = cheerio.load(body);
  return $("#c449").children("p").text();
}

exports.register = register
exports.extractMenu = extractMenu