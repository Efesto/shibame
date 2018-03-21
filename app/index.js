require('./array');
require('./keep_awake');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (request, response) => {
  response.send('Woof!');
});

require('./shibas').register(app);

app.listen(port, (err) => {
  if (err) {
    return console.log('[ERROR] ', err)
  }

  console.log(`server is listening on ${port}`)
})