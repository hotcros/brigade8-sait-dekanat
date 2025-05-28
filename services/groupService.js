const groupRepository = require('../repositories/groupRepository');

exports.getAllGroups = async () => {
  return groupRepository.getGroups();
};

exports.addGroup = async (group) => {
  const groups = await groupRepository.getGroups();
  groups.push(group);
  await groupRepository.saveGroups(groups);
};
exports.updateGroup = async (oldName, newName) => {
  const groups = await groupRepository.getGroups();
  const index = groups.findIndex(g => g.name === oldName);
  if (index !== -1) {
    groups[index].name = newName;
    await groupRepository.saveGroups(groups);
  }
};

exports.deleteGroup = async (name) => {
  const groups = await groupRepository.getGroups();
  const filtered = groups.filter(g => g.name !== name);
  await groupRepository.saveGroups(filtered);
};
