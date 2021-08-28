const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const pug = require('pug');
const port = 3000;

const route = require('./routes/index');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});