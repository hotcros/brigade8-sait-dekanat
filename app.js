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

app.get('/groups/edit/:name', groupController.showEditForm);
app.post('/groups/edit/:name', groupController.editGroup);
app.post('/groups/delete/:name', groupController.deleteGroup);



// Студенти
app.get('/students', studentController.listStudents);
app.get('/students/create', studentController.showCreateForm);
app.post('/students/create', studentController.createStudent);
app.get('/students/edit/:lastName/:firstName', studentController.showEditForm);
app.post('/students/edit/:lastName/:firstName', studentController.editStudent);
app.post('/students/delete/:lastName/:firstName', studentController.deleteStudent);
app.get('/students/search', studentController.searchStudents);

app.listen(3000, () => {
  console.log('Сервер запущено: http://localhost:3000');
});
