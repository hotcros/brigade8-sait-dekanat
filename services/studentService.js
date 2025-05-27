const studentRepository = require('../repositories/studentRepository');

exports.getAllStudents = async () => {
  return studentRepository.getStudents();
};

exports.addStudent = async (student) => {
  const students = await studentRepository.getStudents();
  students.push(student);
  await studentRepository.saveStudents(students);
};
