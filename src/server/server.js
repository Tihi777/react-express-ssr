const express = require('express');
const compression = require('compression');
const { resolve } = require("path");

const { renderPage } = require('./middleware/renderPage.js');

const app = express();

app.use(compression())
   .use(express.static(resolve(__dirname, '../../dist')))

app.use('/*', renderPage());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Application is started on localhost:${port}`);
});