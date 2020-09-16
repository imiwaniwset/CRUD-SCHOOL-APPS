const router = require('express').Router();
const teacherController = require('../controller/teachersControllers');

router.get('/', teacherController.showTeacher)
router.get('/:id', teacherController.findIdTeacher)

module.exports = router