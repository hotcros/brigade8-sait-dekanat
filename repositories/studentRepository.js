const path = './data/students.json';
const dataloader = require('../utils/dataloader');
const fs = require('fs/promises');

exports.getStudents = () => {
  // Обгорнемо callback у проміс, щоб зручно використовувати в async коді
  return new Promise((resolve, reject) => {
    dataloader.loadDataCallback(path, (err, students) => {
      if (err) reject(err);
      else resolve(students);
    });
  });
};

exports.saveStudents = async (students) => {
  await fs.writeFile(path, JSON.stringify(students, null, 2), 'utf-8');
};
