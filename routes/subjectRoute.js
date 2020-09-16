const router = require('express').Router();
const subjectController = require('../controller/subjectControllers');

router.get('/', subjectController.showSubject)
router.get('/:id', subjectController.findIdSubject)

module.exports = router