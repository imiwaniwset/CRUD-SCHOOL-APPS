const database = require('../config/connection')
const {
    get
} = require('../routes/subjectRoute')


class Student {
    constructor(id, first_name, last_name, email, gender, birth_date) {
        this.id = +id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
        this.birth_date = new Date(this.getDate)

    }

    getDate() {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        let rightDate = [year, month, day].join('-');
        return rightDate
    }

    static showStudent(cb) {
        let query = `SELECT * FROM "Students" ORDER BY id;`;
        database.query(query, (err, result) => {
            if (err) {
                cb(err, null)
            } else {
                let students = [];
                for (let i = 0; i < result.rows.length; i++) {
                    let eachResult = result.rows[i]
                    students.push(new Student(eachResult.id, eachResult.first_name, eachResult.last_name, eachResult.email, eachResult.gender, eachResult.birth_date))
                }
                cb(null, students);

            }
        })
    }


    static addStudents(input, cb) {
        let query = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ('${input.first_name}','${input.last_name}','${input.email}','${input.gender}','${input.birth_date}')`;
        database.query(query, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res.rows)
            }
        })

    }

    static findEmail(email, cb) {
        let query = `SELECT * FROM "Students" WHERE email = '${email}'`;
        database.query(query, (err, res) => {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res.rows)
            }
        })
    }

    static findIdStudent(id, cb) {
        let query = `SELECT * FROM "Students" WHERE id = ${Number(id)}`;
        database.query(query, (err, res) => {
            if (err) {
                cb(err, null);
            } else {
                let student = new Student(res.rows[0].id, res.rows[0].first_name, res.rows[0].last_name, res.rows[0].email, res.rows[0].gender, res.rows[0].birth_date)
                cb(null, student)
            }
        })
    }

    static update(student, cb) {
        let query = `UPDATE "Students" SET "first_name" = '${student.first_name}', "last_name" = '${student.last_name}', "email" = '${student.email}', "gender" = '${student.gender}', "birth_date" = '${student.birth_date}' WHERE id = ${Number(student.id)}`
        database.query(query, (err, result) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, result.rows)
            }
        })
    }

    static delete(id, cb) {
        let query = `DELETE FROM "Students" WHERE id = ${Number(id)}`;
        database.query(query, (err, result) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, result)
            }
        })
    }
}






module.exports = Student