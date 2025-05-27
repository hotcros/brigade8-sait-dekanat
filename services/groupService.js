const groupRepository = require('../repositories/groupRepository');

exports.getAllGroups = async () => {
  return groupRepository.getGroups();
};

exports.addGroup = async (group) => {
  const groups = await groupRepository.getGroups();
  groups.push(group);
  await groupRepository.saveGroups(groups);
};
