const express = require('express');

// To create a express application
// Every application can have multiple express apps

const app = express();

// To write a route handler

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// To run our app and listen on specified port

const PORT = process.env.PORT || 5000;

app.listen(PORT);