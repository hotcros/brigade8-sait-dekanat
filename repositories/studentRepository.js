const { loadDataAsyncAwait } = require('../utils/dataLoader');

exports.getStudents = async () => {
  return await loadDataAsyncAwait('./data/students_async.json');
};

exports.search = async (name, group) => {
  const all = await this.getStudents();
  return all.filter(s =>
    (!name || s.lastName.includes(name)) &&
    (!group || s.group.includes(group))
  );
};
