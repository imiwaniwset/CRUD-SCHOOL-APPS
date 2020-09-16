const database = require('../config/connection')

class Subject {
    constructor(id, subject_name) {
        this.id = +id;
        this.subject_name = subject_name;
    }

    static showSubject(cb) {
        let query = `SELECT * FROM "Subjects" ORDER BY id;`
        database.query(query, (err, result) => {
            if (err) {
                cb(err, null)
            } else {
                let subjects = [];
                for (let i = 0; i < result.rows.length; i++) {
                    subjects.push(new Subject(result.rows[i].id, result.rows[i].subject_name))
                }
                cb(null, subjects);

            }

        })
    }
}

module.exports = Subject