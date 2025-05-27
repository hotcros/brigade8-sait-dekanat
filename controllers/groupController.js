const groupService = require('.../services/groupService');

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
