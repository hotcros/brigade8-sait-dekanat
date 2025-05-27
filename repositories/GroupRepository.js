let groups = [];
let idCounter = 1;

module.exports = {
  getAll: () => groups,
  getById: id => groups.find(g => g.id === parseInt(id)),
  add: name => {
    const group = { id: idCounter++, name };
    groups.push(group);
  },
  update: (id, name) => {
    const group = groups.find(g => g.id === parseInt(id));
    if (group) group.name = name;
  },
  delete: id => {
    groups = groups.filter(g => g.id !== parseInt(id));
  }
};
