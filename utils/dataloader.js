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

// Promise
exports.loadDataWithPromise = (path) => {
  return fsPromises.readFile(path, 'utf-8')
    .then(data => JSON.parse(data))
    .catch(() => []);
};

// Callback
exports.loadDataCallback = (path, callback) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return callback(err, []);
    try {
      const json = JSON.parse(data);
      callback(null, json);
    } catch (parseErr) {
      callback(parseErr, []);
    }
  });
};
