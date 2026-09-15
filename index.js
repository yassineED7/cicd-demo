const express = require('express');
const app = express();
// Comment for testing CI workflow
app.get('/', (req, res) => {
  res.status(200).send('Hello CI/CD World!');
});

module.exports = app;