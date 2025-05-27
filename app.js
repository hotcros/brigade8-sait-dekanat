const express = require('express');
const app = express();
const groupRoutes = require('./routes/groupRoutes');
const studentRoutes = require('./routes/studentRoutes');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/groups', groupRoutes);
app.use('/students', studentRoutes);

app.listen(3000, () => {
  console.log('Сервер працює на http://localhost:3000');
});
