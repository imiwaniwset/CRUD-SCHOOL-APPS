const Student = require('../models/studentModel')


class Controller {
    static showAllStudent(req, res) {
        Student.showStudent((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students', {
                    data
                })
            }
        })
    }

    static validate(obj) {
        const errors = [];
        if (!obj.first_name) {
            errors.push(`First Name Required`);
        }
        if (!obj.last_name) {
            errors.push(`Last Name Required`);
        }
        if (!obj.email) {
            errors.push(`Email Required`);
        }
        if (!obj.gender) {
            errors.push(`Gender Required`);
        }
        if (!obj.birth_date) {
            errors.push(`Birth Date required`)
        } else if (!Date.parse(obj.birth_date)) {
            errors.push(`Not a Date`);
        }
        return errors;

    }


    static FormAddStudent(req, res) {
        const errors = req.query.errors
        res.render('addStudent', {
            errors
        })
    }

    static addStudents(req, res) {
        const {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        } = req.body
        let student = {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        };
        const errors = Controller.validate(student)
        if (errors.length > 0) {
            res.redirect('/students/add?errors=' + errors.join(','))
        } else {
            Student.addStudents(student, (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.redirect('/students')
                }
            })
        }
    }

    static findEmailStudent(req, res) {
        let emailStudent = req.params.email
        Student.findEmail(emailStudent, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('students', {
                    data
                })
            }
        })
    }

    static FormUpdateStudent(req, res) {
        let idStudent = req.params.id
        Student.findIdStudent(idStudent, (err, students) => {
            if (err) {
                res.render(err)
            } else {
                const errors = req.query.errors
                res.render('updateForm', {
                    students,
                    errors
                })
            }

        })
    }

    static updateStudent(req, res) {
        const {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        } = req.body
        let student = {
            first_name,
            last_name,
            email,
            gender,
            birth_date
        };
        const errors = Controller.validate(student)
        if (errors.length > 0) {
            res.redirect('./students/add?errors=' + errors.join(','))
        } else {
            Student.update(student, (err, data) => {
                if (err) {
                    res.render(err);
                } else {
                    res.redirect('/students')
                }
            })
        }
    }

    static deleteStudent(req, res) {
        let id = req.params.id;
        Student.delete(id, (err, data) => {
            if (err) {
                res.render(err);
            } else {
                res.redirect('/students')
            }

        })
    }

}

module.exports = Controller