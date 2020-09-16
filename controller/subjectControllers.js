const Subject = require('../models/subjectModel')

class SubjectController {
    static showSubject(req, res) {
        Subject.showSubject((err, data) => {
            if (err) {
                res.render('error', {
                    err
                })
            } else {
                res.render('subjects', {
                    data
                })
            }
        })
    }

    static findIdSubject(req, res) {
        let idSubject = req.params.id
        Subject.findIdSubject(idSubject, (err, data) => {
            if (err) {
                res.render('error', {
                    err
                });
            } else {
                res.render('subjects', {
                    data
                })
            }
        })
    }

}

module.exports = SubjectController