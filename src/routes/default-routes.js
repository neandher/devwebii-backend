let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'ok',
    message: 'Servidor rodando perfeitamenteeeee',
  });
});

module.exports = router;
