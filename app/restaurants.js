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
  const menuEntries = [];
  $("#c449 > p").each(
    (i, p) => menuEntries.push($(p).text())
  );
  return menuEntries.join('\n');
}

exports.register = register
exports.extractMenu = extractMenu