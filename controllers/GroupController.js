const service = require('../services/GroupService');

exports.list = (req, res) => {
  res.render('groups', { groups: service.getAll() });
};

exports.showForm = (req, res) => {
  const group = req.params.id ? service.getById(req.params.id) : null;
  res.render('group_form', { group });
};

exports.save = (req, res) => {
  const { id, name } = req.body;
  if (id) service.update(id, name);
  else service.add(name);
  res.redirect('/groups');
};

exports.delete = (req, res) => {
  service.delete(req.params.id);
  res.redirect('/groups');
};
