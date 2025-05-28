const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

const groupController = require('./controllers/groupController');
const studentController = require('./controllers/studentController');

// Налаштування
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

// Middleware для доступу до сесії в EJS
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Логін
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { role } = req.body;
  if (role === 'student' || role === 'employee') {
    req.session.role = role;
    return res.redirect('/');
  }
  res.redirect('/login');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

// Головна
app.get('/', (req, res) => {
  res.render('index');
});

// Middleware для захисту
function requireEmployee(req, res, next) {
  if (req.session.role !== 'employee') {
    return res.status(403).send('Доступ заборонено');
  }
  next();
}

// Групи
app.get('/groups', groupController.listGroups);
app.get('/groups/create', requireEmployee, groupController.showCreateForm);
app.post('/groups/create', requireEmployee, groupController.createGroup);
app.get('/groups/edit/:name', requireEmployee, groupController.showEditForm);
app.post('/groups/edit/:name', requireEmployee, groupController.editGroup);
app.post('/groups/delete/:name', requireEmployee, groupController.deleteGroup);

// Студенти
app.get('/students', studentController.listStudents);
app.get('/students/create', requireEmployee, studentController.showCreateForm);
app.post('/students/create', requireEmployee, studentController.createStudent);
app.get('/students/edit/:lastName/:firstName', requireEmployee, studentController.showEditForm);
app.post('/students/edit/:lastName/:firstName', requireEmployee, studentController.editStudent);
app.post('/students/delete/:lastName/:firstName', requireEmployee, studentController.deleteStudent);
app.get('/students/search', studentController.searchStudents);

app.listen(3000, () => {
  console.log('Сервер запущено: http://localhost:3000');
});
