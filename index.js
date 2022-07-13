const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', engine({
  extname: '.hbs',
  // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');
// [{"id":"93d77906-4e54-4d07-b92b-15e36aef164a","name":"bartek"}]
app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, 'localhost');
