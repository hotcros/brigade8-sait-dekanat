const groupService = require('../services/groupService');

exports.listGroups = async (req, res) => {
  const groups = await groupService.getAllGroups();
  res.render('groups', { groups });
};

exports.showCreateForm = (req, res) => {
  res.render('groupForm', { group: {}, action: '/groups/create' });
};

exports.createGroup = async (req, res) => {
  const { name } = req.body;
  await groupService.addGroup({ name });
  res.redirect('/groups');
};
exports.showEditForm = async (req, res) => {
  const groups = await groupService.getAllGroups();
  const group = groups.find(g => g.name === req.params.name);
  if (!group) return res.status(404).send('Групу не знайдено');
  res.render('groupForm', { group, action: `/groups/edit/${group.name}` });
};

exports.editGroup = async (req, res) => {
  const oldName = req.params.name;
  const { name } = req.body;
  await groupService.updateGroup(oldName, name);
  res.redirect('/groups');
};

exports.deleteGroup = async (req, res) => {
  await groupService.deleteGroup(req.params.name);
  res.redirect('/groups');
};
