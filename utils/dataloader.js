const fs = require('fs');
const fsPromises = require('fs/promises');

// Синхронне читання
exports.loadDataSync = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

// Async/Await
exports.loadDataAsyncAwait = async (path) => {
  const data = await fsPromises.readFile(path, 'utf-8');
  return JSON.parse(data);
};
