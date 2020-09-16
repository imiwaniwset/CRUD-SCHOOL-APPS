const router = require('express').Router();

const HomeController = require('../controller/homeControllers')
const teachersRouter = require('./teacherRoute')
const studentsRoute = require('./studentRoute')
const subjectsRouter = require('./subjectRoute')

router.get('/', HomeController.home);

router.use('/students', studentsRoute);
router.use('/teachers', teachersRouter);
router.use('/subjects', subjectsRouter);

module.exports = router;