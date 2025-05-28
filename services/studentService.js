const studentRepository = require('../repositories/studentRepository');

exports.getAllStudents = async () => {
  return studentRepository.getStudents();
};

exports.addStudent = async (student) => {
  const students = await studentRepository.getStudents();
  students.push(student);
  await studentRepository.saveStudents(students);
};
exports.updateStudent = async (lastName, firstName, newStudent) => {
  const students = await studentRepository.getStudents();
  const index = students.findIndex(s => s.lastName === lastName && s.firstName === firstName);
  if (index !== -1) {
    students[index] = newStudent;
    await studentRepository.saveStudents(students);
  }
};

exports.deleteStudent = async (lastName, firstName) => {
  const students = await studentRepository.getStudents();
  const filtered = students.filter(s => !(s.lastName === lastName && s.firstName === firstName));
  await studentRepository.saveStudents(filtered);
};
