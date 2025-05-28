const studentService = require('../services/studentService');
const groupService = require('../services/groupService');

exports.listStudents = async (req, res) => {
  const students = await studentService.getAllStudents();
  res.render('students', { students });
};

exports.showCreateForm = async (req, res) => {
  const groups = await groupService.getAllGroups();
  res.render('studentForm', { student: {}, groups, action: '/students/create' });
};

exports.createStudent = async (req, res) => {
  const { lastName, firstName, groupName } = req.body;
  await studentService.addStudent({ lastName, firstName, groupName });
  res.redirect('/students');
};
exports.showEditForm = async (req, res) => {
  const students = await studentService.getAllStudents();
  const groups = await groupService.getAllGroups();
  const student = students.find(s => s.lastName === req.params.lastName && s.firstName === req.params.firstName);
  if (!student) return res.status(404).send('Студента не знайдено');
  res.render('studentForm', { student, groups, action: `/students/edit/${student.lastName}/${student.firstName}` });
};

exports.editStudent = async (req, res) => {
  const { lastName, firstName } = req.params;
  const updatedStudent = req.body;
  await studentService.updateStudent(lastName, firstName, updatedStudent);
  res.redirect('/students');
};

exports.deleteStudent = async (req, res) => {
  const { lastName, firstName } = req.params;
  await studentService.deleteStudent(lastName, firstName);
  res.redirect('/students');
};
exports.searchStudents = async (req, res) => {
  const { lastName = '', groupName = '' } = req.query;
  const students = await studentService.getAllStudents();
  const filtered = students.filter(student =>
    student.lastName.toLowerCase().includes(lastName.toLowerCase()) &&
    student.groupName.toLowerCase().includes(groupName.toLowerCase())
  );
  res.render('students', { students: filtered });
};
