const pool = require('./connection')
const fs = require('fs')




// =========== INSERT DATA STUDENT FROM JSON TO DB

const studentList = JSON.parse(fs.readFileSync('../students.json', 'utf-8'))
// console.log(studentList);
const studentsValue = [];
for (let i = 0; i < studentList.length; i++) {
    let eachStudent = studentList[i]
    studentsValue.push(`('${eachStudent.first_name}', '${eachStudent.last_name}', '${eachStudent.email}', '${eachStudent.gender}', '${eachStudent.birth_date}' )`)
}

const insertTableStudent = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ${studentsValue.join(',')}`
// console.log(insertTableStudent);
pool.query(insertTableStudent, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Insert Table Student Success')
        // =========== INSERT DATA TEACHER FROM JSON TO DB

        const TeacherList = JSON.parse(fs.readFileSync('../teachers.json', 'utf-8'))
        // console.log(TeacherList);
        const TeachersValue = [];
        for (let i = 0; i < TeacherList.length; i++) {
            let eachTeacher = TeacherList[i]
            TeachersValue.push(`('${eachTeacher.first_name}', '${eachTeacher.last_name}', '${eachTeacher.email}', '${eachTeacher.gender}' )`)
        }

        const insertTableTeacher = `INSERT INTO "Teachers" ("first_name", "last_name", "email", "gender") VALUES ${TeachersValue.join(',')}`
        // console.log(insertTableTeacher);
        pool.query(insertTableTeacher, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Insert Table Teacher Success')

                // =========== INSERT DATA SUBJECT FROM JSON TO DB

                const SubjectList = JSON.parse(fs.readFileSync('../subjects.json', 'utf-8'))
                // console.log(SubjectList);
                const SubjectsValue = [];
                for (let i = 0; i < SubjectList.length; i++) {
                    let eachSubject = SubjectList[i]
                    SubjectsValue.push(`('${eachSubject.subject_name}')`)
                }

                const insertTableSubject = `INSERT INTO "Subjects" ("subject_name") VALUES ${SubjectsValue.join(',')}`
                // console.log(insertTableSubject);
                pool.query(insertTableSubject, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Insert Table Subject Success')
                    }


                })
            }


        })
    }


})