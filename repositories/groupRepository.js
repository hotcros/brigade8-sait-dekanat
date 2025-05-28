const path = './data/groups_sync.json';
const dataloader = require('../utils/dataloader');

exports.getGroups = () => {
  // Використовуємо проміс
  return dataloader.loadDataWithPromise(path);
};

exports.saveGroups = async (groups) => {
  const fs = require('fs/promises');
  await fs.writeFile(path, JSON.stringify(groups, null, 2), 'utf-8');
};
