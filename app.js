const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const groupRoutes = require('./routes/groupRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/groups', groupRoutes);
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.redirect('/groups');
});

app.listen(3000, () => console.log('Сервер запущено на порту 3000'));
