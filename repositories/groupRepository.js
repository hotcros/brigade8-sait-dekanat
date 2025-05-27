const fs = require('fs/promises');
const path = '.../data/groups_sync.json';

exports.getGroups = async () => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

exports.saveGroups = async (groups) => {
  await fs.writeFile(path, JSON.stringify(groups, null, 2), 'utf-8');
};
