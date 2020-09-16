const pool = require('./connection')

const tableStudent = `
DROP TABLE IF EXISTS "Students";
CREATE TABLE IF NOT EXISTS "Students" (
"id" serial PRIMARY KEY,
"first_name" VARCHAR NOT NULL,
"last_name" VARCHAR NOT NULL,
"email" VARCHAR NOT NULL,
"gender" VARCHAR NOT NULL,
"birth_date" VARCHAR
);
`

const tableTeacher = `
DROP TABLE IF EXISTS "Teachers";
CREATE TABLE IF NOT EXISTS "Teachers" (
"id" serial PRIMARY KEY,
"first_name" VARCHAR NOT NULL,
"last_name" VARCHAR NOT NULL,
"email" VARCHAR NOT NULL,
"gender" VARCHAR NOT NULL
);
`

const tableSubject = `
DROP TABLE IF EXISTS "Subjects";
CREATE TABLE IF NOT EXISTS "Subjects" (
"id" serial PRIMARY KEY,
"subject_name" VARCHAR NOT NULL
);
`



pool.query(tableStudent, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log("Create Table Student Successfully")
        pool.query(tableTeacher, (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log("Create Table Teacher Successfully")
                pool.query(tableSubject, (err, res) => {
                    if (err) {
                        console.log(err.stack)
                    } else {
                        console.log("Create Table Student Successfully")
                        pool.end()
                    }
                })
            }
        })
    }
})