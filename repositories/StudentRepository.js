let students = [];
let studentId = 1;

module.exports = {
  getAll: () => students,
  getByGroupId: groupId => students.filter(s => s.groupId === parseInt(groupId)),
  getById: id => students.find(s => s.id === parseInt(id)),
  search: (surname, groupName, groupRepo) => {
    return students.filter(s =>
      (!surname || s.surname.toLowerCase().includes(surname.toLowerCase())) &&
      (!groupName || groupRepo.getById(s.groupId)?.name.toLowerCase().includes(groupName.toLowerCase()))
    );
  },
  add: (surname, name, groupId) => {
    students.push({ id: studentId++, surname, name, groupId: parseInt(groupId) });
  },
  update: (id, surname, name, groupId) => {
    const student = students.find(s => s.id === parseInt(id));
    if (student) {
      student.surname = surname;
      student.name = name;
      student.groupId = parseInt(groupId);
    }
  },
  delete: id => {
    students = students.filter(s => s.id !== parseInt(id));
  }
};
