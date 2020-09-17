const Teacher = require('../models/teacherModel')

class TeachersController {
    static showTeacher(req, res) {
        Teacher.showTeacher((err, data) => {
            if (err) {
                res.render('error', {
                    err
                })
            } else {
                res.render('teachers', {
                    data
                })
            }
        })
    }

    static findIdTeacher(req, res) {
        let idTeacher = req.params.id
        Teacher.findById(idTeacher, (err, data) => {
            if (err) {
                res.render('error', {
                    err
                });
            } else {
                res.render('teachers', {
                    data
                })
            }
        })
    }
}

module.exports = TeachersController