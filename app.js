const express = require('express');
const app = express();
const path = require('path');

const groupController = require('./controllers/groupController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Головна
app.get('/', (req, res) => {
  res.render('index');
});

// Групи
app.get('/groups', groupController.listGroups);
app.get('/groups/create', groupController.showCreateForm);
app.post('/groups/create', groupController.createGroup);

app.listen(3000, () => {
  console.log('Сервер запущено: http://localhost:3000');
});
