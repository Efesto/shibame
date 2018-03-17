const express = require('express');
require('./keep_awake');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('[ERROR] ', err)
  }

  console.log(`server is listening on ${port}`)
})