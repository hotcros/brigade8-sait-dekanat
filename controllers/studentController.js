const studentService = require('../services/studentService');

exports.listStudents = async (req, res) => {
  const students = await studentService.getAllStudents();
  res.render('students', { students });
};

exports.searchStudents = async (req, res) => {
  const { name, group } = req.query;
  const result = await studentService.searchStudents(name, group);
  res.render('students', { students: result });
};
