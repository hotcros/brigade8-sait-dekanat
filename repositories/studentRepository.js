const fs = require('fs/promises');
const path = './data/students.json';

exports.getStudents = async () => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

exports.saveStudents = async (students) => {
  await fs.writeFile(path, JSON.stringify(students, null, 2), 'utf-8');
};
