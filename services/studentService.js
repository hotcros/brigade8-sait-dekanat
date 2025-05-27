const studentRepository = require('../repositories/studentRepository');

exports.getAllStudents = async () => {
  return await studentRepository.getStudents();
};

exports.searchStudents = async (name, group) => {
  return await studentRepository.search(name, group);
};
