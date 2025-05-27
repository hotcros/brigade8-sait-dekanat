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
