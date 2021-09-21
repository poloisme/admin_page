const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const {sum} = require('../src/util/handlebars-helper');
const {sub} = require('../src/util/handlebars-helper');

const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db');

//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: sum,
    sub: sub,
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});