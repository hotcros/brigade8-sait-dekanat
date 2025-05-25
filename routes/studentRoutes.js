const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/StudentController');

router.get('/', ctrl.list);
router.get('/search', ctrl.search);
router.get('/new', ctrl.showForm);
router.get('/edit/:id', ctrl.showForm);
router.post('/save', ctrl.save);
router.get('/delete/:id', ctrl.delete);

module.exports = router;
