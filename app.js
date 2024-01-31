const express = require('express');
const app = express();

const port = 8000;

app.get('/', (request, response) => {
  response.send('hello from the server');
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
