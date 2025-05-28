exports.requireEmployee = (req, res, next) => {
  if (req.session.role === 'employee') {
    next();
  } else {
    res.status(403).send('Доступ заборонено. Потрібна роль: Співробітник.');
  }
};
