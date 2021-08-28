const express = require('express');
const app = express();
const morgan = require('morgan');
const pug = require('pug');
const port = 3000;

app.use(morgan('combined'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', function(req, res){
	res.render('index');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});