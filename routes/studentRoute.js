const router = require('express').Router();
const StudentsController = require('../controller/studentControllers');

router.get('/', StudentsController.showAllStudent);
router.get('/add', StudentsController.FormAddStudent);
router.post('/add', StudentsController.addStudents);
router.get('/:email', StudentsController.findEmailStudent);
router.get('/:id/edit', StudentsController.FormUpdateStudent);
router.post('/:id/edit', StudentsController.updateStudent);
router.get('/:id/delete', StudentsController.deleteStudent);

module.exports = router;