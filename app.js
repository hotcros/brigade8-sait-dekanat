const express = require('express');
const app = express();
const path = require('path');

const groupController = require('./controllers/groupController');
const studentController = require('./controllers/studentController');
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




// Студенти
app.get('/students', studentController.listStudents);
app.get('/students/create', studentController.showCreateForm);
app.post('/students/create', studentController.createStudent);

app.listen(3000, () => {
  console.log('Сервер запущено: http://localhost:3000');
});
