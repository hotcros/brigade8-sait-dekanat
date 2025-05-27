const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '../data/Groups.json');

// 1. Синхронно
function getGroupsSync() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// 2. Callback
function getGroupsCallback(callback) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return callback(err);
    try {
      callback(null, JSON.parse(data));
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

// 3. Promise
function getGroupsPromise() {
  return fsPromises.readFile(filePath, 'utf-8')
    .then(data => JSON.parse(data));
}

// 4. Async/Await
async function getGroupsAsync() {
  const data = await fsPromises.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

module.exports = {
  getGroupsSync,
  getGroupsCallback,
  getGroupsPromise,
  getGroupsAsync
};
