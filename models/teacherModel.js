const database = require('../config/connection')

class Teacher {
    constructor(id, first_name, last_name, email, gender) {
        this.id = +id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender

    }

    static showTeacher(cb) {
        let query = `SELECT * FROM "Teachers" ORDER BY id;`
        database.query(query, (err, result) => {
            if (err) {
                cb(err, null)
            } else {
                let teachers = [];
                for (let i = 0; i < result.rows.length; i++) {
                    teachers.push(new Teacher(result.rows[i].id, result.rows[i].first_name, result.rows[i].last_name, result.rows[i].email, result.rows[i].gender))
                }
                cb(null, teachers);

            }

        })
    }
}

module.exports = Teacher