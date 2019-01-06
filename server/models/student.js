const mongoose = require('mongoose')
const Schema = mongoose.Schema
const fs = require('fs')
const path = require('path')
const csvjson = require('csvjson')

let Data = fs.readFileSync(path.join(__dirname, '../data/dataFile.csv'), { encoding: 'utf8' })

const Student = new Schema({
    UTME: {
        type: String
    },
    FULLNAME: String,
    DEPT: String,
    STATE: String,
    LOCAL_GOVT: String,
    SCORE: Number
})

let student = mongoose.model('student', Student)

let options = {
    delimiter: ',',
    quote: '"'
}

let studentFile = csvjson.toObject(Data, options);

studentFile.forEach(function (data) {
    if (data) {
        let Utme_NO = data.UTME_NO;
        let Fullname = data.Fullname;
        let Dept = data.Dept;
        let State = data.State;
        let Local_govt = data.Local_govt;
        let Score = data.Score;

        let Students = new student({
            UTME: Utme_NO,
            FULLNAME: Fullname,
            DEPT: Dept,
            LOCAL_GOVT: Local_govt,
            STATE: State,
            SCORE: Score
        })

        Students.save(function (err, student) {
            if (err) {
                console.log('Error has occured')
                console.log(err)
            }
        })
    }
})


module.exports = student
