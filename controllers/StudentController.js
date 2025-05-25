const studentService = require('../services/StudentService');
const groupService = require('../services/GroupService');

exports.list = (req, res) => {
  const students = studentService.getAll();
  res.render('students', { students, groups: groupService.getAll(), filter: {} });
};

exports.search = (req, res) => {
  const { surname, groupName } = req.query;
  const students = studentService.search(surname, groupName, groupService);
  res.render('students', { students, groups: groupService.getAll(), filter: req.query });
};

exports.showForm = (req, res) => {
  const student = req.params.id ? studentService.getById(req.params.id) : null;
  const groups = groupService.getAll();
  res.render('student_form', { student, groups });
};

exports.save = (req, res) => {
  const { id, surname, name, groupId } = req.body;
  if (id) studentService.update(id, surname, name, groupId);
  else studentService.add(surname, name, groupId);
  res.redirect('/students');
};

exports.delete = (req, res) => {
  studentService.delete(req.params.id);
  res.redirect('/students');
};
