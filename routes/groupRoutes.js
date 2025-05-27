const express = require('express');
const router = express.Router();
const repo = require('../repositories/GroupRepository');

// ✅ 1. Синхронний
router.get('/sync', (req, res) => {
  const groups = repo.getGroupsSync();
  res.render('groups', { groups, method: 'Синхронний' });
});

// ✅ 2. Callback
router.get('/callback', (req, res) => {
  repo.getGroupsCallback((err, groups) => {
    if (err) return res.status(500).send('Помилка при читанні файлу');
    res.render('groups', { groups, method: 'Callback' });
  });
});

// ✅ 3. Promise
router.get('/promise', (req, res) => {
  repo.getGroupsPromise()
    .then(groups => {
      res.render('groups', { groups, method: 'Promise' });
    })
    .catch(() => res.status(500).send('Помилка при читанні файлу'));
});

// ✅ 4. Async/Await
router.get('/async', async (req, res) => {
  try {
    const groups = await repo.getGroupsAsync();
    res.render('groups', { groups, method: 'Async/Await' });
  } catch {
    res.status(500).send('Помилка при читанні файлу');
  }
});

module.exports = router;
